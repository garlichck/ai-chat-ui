// AIChatUI.js
import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import './AIChatUI.css';

const AIChatUI = ({ onMessageSubmit }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const reply = await onMessageSubmit(text);
      const botMessage = { role: 'assistant', content: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error getting response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-ui-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} role={msg.role} content={msg.content} />
        ))}
      </div>
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
};

export default AIChatUI;
