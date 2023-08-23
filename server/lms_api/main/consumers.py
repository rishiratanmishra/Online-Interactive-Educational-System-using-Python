# consumers.py

import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import TeacherStudentChat

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        student_id = data['student_id']
        msg_from = "Teacher"

        # Store the message in the database
        TeacherStudentChat.objects.create(
            teacher=self.scope['user'],  # Assuming the teacher is authenticated
            student_id=student_id,
            msg_text=message,
            msg_from=msg_from,
        )

        # Send the message back to the WebSocket (optional)
        response_data = {
            'message': message,
            'student_id': student_id,
            'msg_from': msg_from,
        }
        await self.send(text_data=json.dumps(response_data))



class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat_message", "message": message}
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message}))