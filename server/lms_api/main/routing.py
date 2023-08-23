# routing.py

from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from django.urls import re_path
from . import consumers
from main.consumers import ChatConsumer  # Replace 'your_app_name' with your app's name

websocket_urlpatterns = [
    path('ws/chat/', ChatConsumer.as_asgi()),
]
#push Notification
websocket_urlpatterns = [
    re_path(r'ws/notification/(?P<room_name>\w+)/$', consumers.NotificationConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    'websocket': URLRouter(websocket_urlpatterns),
})
