"use client"
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
// import { useRouter } from 'next/router';
// import RollNoPage from '@/app/student-chat/[rollNo]';



const ChatNow = ({rollNo}) => {

  const websocketUrl = 'http://localhost:8000/ws/chat/';

  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
    
  const socket = io(websocketUrl);
//   const router = useRouter();
//   const { rollNo } = router.query; // Get the 'rollNo' from the dynamic route parameter
    
useEffect(() => {
    // Connect to the WebSocket server
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    // Handle incoming messages from the WebSocket server
    socket.on('message', (message) => {
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up WebSocket connection on component unmount
    return () => {
      socket.disconnect();
      console.log('Disconnected from WebSocket');
    };
  }, []); 
    
    
    
    
    
  
    

    const handleSendMessage = () => {
        // Send message to the WebSocket server
        socket.emit('message', {
          message: message,
          student_id: rollNo // Replace '123' with the actual rollNo of the student you want to chat with
        });
    
        // Clear the message input after sending
        setMessage('');
      };

    
      return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-600 text-gray-800 p-10">
          {/* Render chat messages */}
          <div className="flex flex-col flex-grow w-full max-w-xl bg-black shadow-xl rounded-lg overflow-hidden">
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              {chatMessages.map((chat, index) => (
                <div key={index}>
                  <p>{chat.message}</p>
                  <p>{chat.time}</p>
                </div>
              ))}
            </div>
    
            <div className="bg-gray-300 p-4">
              <input
                className="flex items-center h-10 w-full rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
    
          {/* Send button */}
          <button onClick={handleSendMessage} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      );




  // Rest of the code...
};

export default ChatNow;
