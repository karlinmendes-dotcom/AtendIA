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
      content: 'Olá! Bem-vindo à AtendIA. Como posso te ajudar hoje? Posso te explicar nossos planos, funcionalidades ou tirar qualquer dúvida sobre o sistema.',
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
    <div className="fixed right-4 bottom-4 z-50 sm:right-5 sm:bottom-5">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            mb-3 flex w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border
            border-gray-800 bg-[#0a0a0a] shadow-2xl shadow-black/50
          "
          style={{ height: 'min(500px, calc(100vh - 120px))' }}
        >
          {/* Header */}
          <div className="
            flex items-center justify-between bg-linear-to-r from-[#2dd4bf] to-teal-500
            px-4 py-3
          ">
            <div className="flex items-center gap-2.5">
              <div className="
                flex size-9 items-center justify-center rounded-full bg-white/20
              ">
                <Bot className="size-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">AtendIA</h3>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-green-300" />
                  <p className="text-xs text-white/80">Online agora</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="
                flex size-8 items-center justify-center rounded-full bg-white/10
                text-white transition-colors hover:bg-white/20
              "
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#111] p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`
                  flex
                  ${msg.role === 'user' ? 'justify-end' : 'justify-start'}
                `}
              >
                <div
                  className={`
                    max-w-[85%] rounded-2xl px-4 py-2.5 text-sm/relaxed
                    ${
              msg.role === 'user'
                ? 'rounded-br-md bg-[#2dd4bf] text-black font-medium'
                : `
                  rounded-bl-md border border-white/10 bg-white/5 text-gray-300
                `
              }
                  `}
                >
                  {msg.role === 'assistant' && (
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <Bot className="size-3.5 text-[#2dd4bf]" />
                      <span className="text-xs font-semibold text-[#2dd4bf]">AtendIA</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="
                  rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4
                  py-3
                ">
                  <div className="flex items-center gap-1.5">
                    <Bot className="size-3.5 text-[#2dd4bf]" />
                    <span className="text-xs font-semibold text-[#2dd4bf]">AtendIA</span>
                  </div>
                  <div className="mt-1.5 flex gap-1">
                    <div
                      className="size-2 animate-bounce rounded-full bg-[#2dd4bf]/60"
                      style={{ animationDelay: '0ms' }}
                    />
                    <div
                      className="size-2 animate-bounce rounded-full bg-[#2dd4bf]/60"
                      style={{ animationDelay: '150ms' }}
                    />
                    <div
                      className="size-2 animate-bounce rounded-full bg-[#2dd4bf]/60"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-[#0a0a0a] p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Digite sua mensagem..."
                className="
                  flex-1 rounded-xl border border-white/10 bg-white/5 px-4
                  py-2.5 text-sm text-white placeholder-gray-500
                  focus:border-[#2dd4bf]/50 focus:ring-1 focus:ring-[#2dd4bf]/50
                  focus:outline-none
                "
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="
                  flex size-10 items-center justify-center rounded-xl
                  bg-[#2dd4bf] text-black transition-all
                  hover:bg-[#2dd4bf]/90 hover:shadow-lg hover:shadow-[#2dd4bf]/25
                  disabled:cursor-not-allowed disabled:opacity-40
                "
              >
                <Send className="size-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-gray-600">
              Powered by AtendIA
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex size-14 items-center justify-center rounded-full
          bg-[#2dd4bf] text-black shadow-lg shadow-[#2dd4bf]/30
          transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#2dd4bf]/40
          active:scale-95
        "
      >
        {isOpen
          ? (
              <X className="size-6" strokeWidth={2.5} />
            )
          : (
              <MessageCircle className="size-6" strokeWidth={2} />
            )}
      </button>
    </div>
  );
}
