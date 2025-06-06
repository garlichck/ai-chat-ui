// App.js
import React from 'react';
import AIChatUI from './AIChatUI';

const App = () => {
  const mockLLM = async (message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Echo: ${message}`);
      }, 1000);
    });
  };

  return (
    <div style={{ padding: '40px', background: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>AI Chat UI Demo</h2>
      <AIChatUI onMessageSubmit={mockLLM} />
    </div>
  );
};

export default App;
