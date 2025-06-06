// ChatInput.js
import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        className="chat-input"
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
      />
      <button className="chat-send-btn" type="submit" disabled={disabled || !text.trim()}>
        Send
      </button>
    </form>
  );
};

export default ChatInput;
