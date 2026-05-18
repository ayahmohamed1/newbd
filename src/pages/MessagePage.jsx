import { useState } from 'react';

export default function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="chat-page">
      <h2 className="section-title">Messages</h2>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className="bubble" dir="auto">
            {msg}
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input 
          dir="auto" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..." 
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}