"use client"
import { useState, useEffect } from 'react';

const Notification = ({ roomName }) => {
  const [chatLog, setChatLog] = useState('');
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const chatSocket = new WebSocket(
      `ws://${window.location.host}/ws/chat/${roomName}/`
    );

    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setChatLog((prevChatLog) => prevChatLog + data.message + '\n');
    };

    chatSocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };

    return () => {
      chatSocket.close();
    };
  }, [roomName]);

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = () => {
    const chatSocket = new WebSocket(
      `ws://${window.location.host}/ws/chat/${roomName}/`
    );

    chatSocket.onopen = function () {
      chatSocket.send(JSON.stringify({ message: messageInput }));
      setMessageInput('');
      chatSocket.close();
    };
  };

  return (
    <div>
      <textarea id="chat-log" cols="100" rows="20" value={chatLog} readOnly></textarea>
      <br />
      <input
        id="chat-message-input"
        type="text"
        size="100"
        value={messageInput}
        onChange={handleInputChange}
      />
      <br />
      <input
        id="chat-message-submit"
        type="button"
        value="Send"
        onClick={handleSendMessage}
      />
    </div>
  );
};

export default Notification;
