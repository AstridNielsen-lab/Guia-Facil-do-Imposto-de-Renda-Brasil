import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Volume2, X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speakMessage = (text: string) => {
    if (synth) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      synth.speak(utterance);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer AIzaSyDkJOOHPI7SKBw3GDnj0LYe7ntXV9e5Obc`
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Você é Julio Campos Machado, um especialista em imposto de renda no Brasil. 
                       Responda de forma natural e profissional, sem usar caracteres especiais: ${userMessage}`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      const botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Desculpe, não consegui entender a resposta.';

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      speakMessage(botResponse);
    } catch (error) {
      console.error('Erro ao buscar resposta da IA:', error);
      setMessages(prev => [...prev, {
        text: 'Desculpe, ocorreu um erro ao tentar responder. Tente novamente mais tarde.',
        isBot: true
      }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-[calc(100vw-2rem)]">
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat com Especialista</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-gray-700">
                Olá! Sou Julio Campos Machado, especialista em imposto de renda. 
                Como posso ajudar você hoje?
              </p>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[90%] ${
                  message.isBot 
                    ? 'bg-green-50 text-gray-700 self-start' 
                    : 'bg-blue-50 text-gray-700 self-end ml-auto'
                }`}
              >
                <p>{message.text}</p>
                {message.isBot && (
                  <button
                    onClick={() => speakMessage(message.text)}
                    className="mt-2 text-green-600 hover:text-green-700"
                  >
                    <Volume2 size={16} />
                  </button>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-600">Digitando...</p>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 transition-colors disabled:bg-gray-400"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
