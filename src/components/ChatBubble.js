// ChatBubble.js
import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ role, content }) => {
  return (
    <div className={`chat-bubble ${role}`}>
      <div className="bubble-content">{content}</div>
    </div>
  );
};

export default ChatBubble;
