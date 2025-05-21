import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, User, Loader2 } from 'lucide-react';
import Button from './Button'; // 기존 Button 컴포넌트 재활용

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
  botName?: string;
  initialMessage?: string;
}

const ChatPopup: React.FC<ChatPopupProps> = ({ 
  isOpen, 
  onClose, 
  botName = 'iMate AI',
  initialMessage = '안녕하세요! iMate에 대해 궁금한 점을 물어보세요.' 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && initialMessage) {
      setMessages([
        { id: 'initial', text: initialMessage, sender: 'bot' }
      ]);
    }
  }, [isOpen, initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = {
      id: new Date().toISOString(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    // TODO: OpenAI API 호출 로직 구현
    // 이 부분은 백엔드 API를 통하거나, 클라이언트에서 직접 호출할 수 있습니다.
    // 클라이언트에서 직접 호출 시 API 키 노출에 주의해야 합니다.
    try {
      // 실제 API 호출 예시 (백엔드 API /api/chat 가정)
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ message: inputValue, history: messages }),
      // });
      // const data = await response.json();
      // const botResponse: Message = {
      //   id: new Date().toISOString() + '-bot',
      //   text: data.reply, // API 응답 형식에 따라 수정
      //   sender: 'bot',
      // };

      // 임시 봇 응답 (API 연동 전)
      await new Promise(resolve => setTimeout(resolve, 1000)); // 로딩 효과를 위한 딜레이
      const botResponse: Message = {
        id: new Date().toISOString() + '-bot',
        text: `"${newUserMessage.text}" 라고 물어보셨네요! 현재는 개발 중이라 답변을 드릴 수 없지만, 곧 멋진 답변으로 찾아뵐게요! iMate에 대한 질문은 언제나 환영입니다.`,
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse: Message = {
        id: new Date().toISOString() + '-error',
        text: '메시지 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[70vh] max-h-[600px] bg-white shadow-2xl rounded-lg flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-slate-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-purple-600" />
          <h3 className="font-semibold text-lg text-slate-800">{botName}</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-500 hover:text-slate-700">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-100/50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[75%] p-3 rounded-lg ${ 
                msg.sender === 'user' 
                  ? 'bg-purple-600 text-white rounded-br-none'
                  : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
              }`}
            >
              {msg.text.split('\n').map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] p-3 rounded-lg bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm flex items-center">
              <Loader2 className="h-5 w-5 text-purple-600 animate-spin mr-2" />
              <span>답변을 생각하고 있어요...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow duration-150"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-150" 
            disabled={isLoading}
            aria-label="메시지 전송"
          >
            <Send className="h-5 w-5" />
            <span>전송</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatPopup; 