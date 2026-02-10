
import React, { useState, useEffect, useRef } from 'react';
import { Contact, Message } from '../types';

interface ChatWindowProps {
  contact: Contact;
  onVoiceClick: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ contact, onVoiceClick }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hey there! Welcome to Warka Isii.', sender: 'them', timestamp: new Date() },
    { id: '2', text: 'How can I help you today?', sender: 'them', timestamp: new Date() },
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'me',
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');

    // Echo for demo
    setTimeout(() => {
        const reply: Message = {
            id: (Date.now() + 1).toString(),
            text: `Received: ${inputText}`,
            sender: 'them',
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#0b141a]">
      {/* Header */}
      <div className="p-3 bg-[#202c33] flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img src={contact.avatar} className="w-10 h-10 rounded-full" alt={contact.name} />
          <div>
            <h2 className="font-semibold text-white leading-tight">{contact.name}</h2>
            <p className="text-xs text-emerald-400">{contact.online ? 'Online' : contact.lastSeen}</p>
          </div>
        </div>
        <div className="flex gap-6 text-gray-400">
          <button 
            onClick={onVoiceClick}
            className="p-2 hover:bg-[#2a3942] rounded-full transition-colors text-emerald-400"
            title="Start Voice Conversation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-[#2a3942] rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-3"
        style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundOpacity: 0.1 }}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-lg text-sm shadow-sm ${msg.sender === 'me' ? 'bg-[#005c4b] text-white rounded-tr-none' : 'bg-[#202c33] text-white rounded-tl-none'}`}>
              <p>{msg.text}</p>
              <div className="text-[10px] text-gray-400 text-right mt-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-[#202c33] flex items-center gap-4">
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message"
          className="flex-1 bg-[#2a3942] text-white rounded-lg px-4 py-2 focus:outline-none text-sm"
        />
        {inputText.trim() ? (
          <button onClick={handleSendMessage} className="text-emerald-400 hover:text-emerald-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        ) : (
          <button onClick={onVoiceClick} className="text-gray-400 hover:text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
