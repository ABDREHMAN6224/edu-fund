import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Hello! I\'m your EduFund assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      content: message,
      timestamp: new Date()
    }]);

    // Simulate assistant response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: getAssistantResponse(message),
        timestamp: new Date()
      }]);
    }, 1000);

    setMessage('');
  };

  const getAssistantResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('how to donate')) {
      return 'You can donate by selecting a student profile and clicking the "Support" button. We accept various payment methods including credit cards and bank transfers.';
    } else if (lowerMessage.includes('student requirements')) {
      return 'Students must maintain a minimum GPA of 3.0, be enrolled in an accredited university, and demonstrate financial need to be eligible for funding.';
    } else {
      return 'I\'m here to help! You can ask me about donation process, student requirements, or any other questions about EduFund.';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 animate-bounce"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-8 right-8 w-96 bg-white rounded-lg shadow-xl transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[32rem]'}`}>
      {/* Header */}
      <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <span className="font-medium">EduFund Assistant</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:text-indigo-200 transition-colors"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};