'use client';

import { api } from '@convex/_generated/api';
import { useAction } from 'convex/react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! 👋 Bem-vindo à AtendIA. Como posso te ajudar hoje? Posso te explicar nossos planos, funcionalidades ou tirar qualquer dúvida sobre o sistema.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sendMessage = useAction(api.chat.sendMessage);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) {
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const response = await sendMessage({ message: userMessage, history });
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Desculpe, tive um problema técnico. Tente novamente ou fale conosco pelo WhatsApp: +55 27 99804-1197' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            mb-3 flex w-[340px] flex-col overflow-hidden rounded-2xl border
            border-gray-200 bg-white shadow-2xl
            sm:w-[380px]
          "
          style={{ height: '500px' }}
        >
          {/* Header */}
          <div className="
            flex items-center justify-between bg-linear-to-r from-blue-600
            to-blue-700 px-4 py-3
          "
          >
            <div className="flex items-center gap-2">
              <div className="
                flex size-8 items-center justify-center rounded-full bg-white/20
              "
              >
                <Bot className="size-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">AtendIA</h3>
                <p className="text-xs text-blue-100">Suporte em tempo real</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="
                text-white/80 transition-colors
                hover:text-white
              "
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`
                  flex
                  ${msg.role === 'user'
                ? 'justify-end'
                : `justify-start`}
                `}
              >
                <div
                  className={`
                    max-w-[80%] rounded-2xl px-4 py-2.5 text-sm/relaxed
                    ${
              msg.role === 'user'
                ? 'rounded-br-md bg-blue-600 text-white'
                : `
                  rounded-bl-md border border-gray-200 bg-white text-gray-800
                  shadow-sm
                `
              }
                  `}
                >
                  {msg.role === 'assistant' && (
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <Bot className="size-3.5 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600">AtendIA</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="
                  rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4
                  py-3 shadow-sm
                "
                >
                  <div className="flex items-center gap-1.5">
                    <Bot className="size-3.5 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">AtendIA</span>
                  </div>
                  <div className="mt-1 flex gap-1">
                    <div
                      className="size-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '0ms' }}
                    />
                    <div
                      className="size-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '150ms' }}
                    />
                    <div
                      className="size-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Digite sua mensagem..."
                className="
                  flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4
                  py-2.5 text-sm
                  focus:border-transparent focus:ring-2 focus:ring-blue-500
                  focus:outline-none
                "
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="
                  flex size-10 items-center justify-center rounded-xl
                  bg-blue-600 text-white transition-colors
                  hover:bg-blue-700
                  disabled:cursor-not-allowed disabled:opacity-50
                "
              >
                <Send className="size-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-gray-400">
              Powered by AtendIA • IA por Llama
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex size-14 items-center justify-center rounded-full bg-linear-to-r
          from-blue-600 to-blue-700 text-white shadow-lg transition-all
          hover:scale-105 hover:shadow-xl
        "
      >
        {isOpen
          ? (
              <X className="size-6" />
            )
          : (
              <MessageCircle className="size-6" />
            )}
      </button>
    </div>
  );
}
