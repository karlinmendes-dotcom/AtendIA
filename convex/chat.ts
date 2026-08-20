import { v } from 'convex/values';
import { action } from './_generated/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const SYSTEM_PROMPT = `Você é a assistente virtual da AtendIA — uma empresa de tecnologia especializada em criar soluções digitais de agendamento e atendimento para pequenos negócios.

SUA MISSÃO:
- Ajudar o visitante a entender como a AtendIA pode transformar o negócio dele
- Mostrar os benefícios do sistema de agendamento online
- Explicar os planos de forma clara e objetiva
- Conduzir o visitante para a ação (contratar ou falar com o time)

O QUE A ATENDIA OFERECE:
- Sistema de agendamento online personalizado para salões, barbearias, clínicas e outros negócios
- Página profissional com identidade visual do negócio
- Cadastro de serviços, clientes e horários
- Painel administrativo completo
- Automação por WhatsApp (confirmações, lembretes)
- CRM completo de clientes
- Inteligência Artificial (Gemini) para atendimento e automação
- Integração com API oficial do Meta para campanhas

PLANOS:
- Essencial (R$ 97/mês + R$ 447 implementação): Agendamento online simples, sem IA
- Profissional (R$ 147/mês + R$ 747 implementação): + 1 IA Gemini no painel, CRM, automações
- Premium (R$ 197/mês + R$ 997 implementação): + 2 IAs Gemini, Meta API, campanhas, tudo incluso

GARANTIA: 30 dias incondicional. Se não gostar, devolvemos 100%.

REGRAS:
- Seja simpática, profissional e objetiva
- Use linguagem simples, como se estivesse conversando com o dono de um salão
- Nunca invente informações sobre preços ou funcionalidades
- Se não souber algo, diga que vai encaminhar para o time
- Sempre tente guiar para uma ação (ver planos, falar no WhatsApp)
- WhatsApp para contato: +55 27 99804-1197
- Respostas curtas (máximo 3-4 frases)
- Use emojis com moderação para tornar a conversa amigável`;

export const sendMessage = action({
  args: {
    message: v.string(),
    history: v.array(v.object({
      role: v.union(v.literal('user'), v.literal('assistant')),
      content: v.string(),
    })),
  },
  handler: async (_ctx, args) => {
    if (!GROQ_API_KEY) {
      return 'Desculpe, o assistente virtual está temporariamente indisponível. Por favor, entre em contato pelo WhatsApp: +55 27 99804-1197';
    }

    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...args.history.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user' as const, content: args.message },
    ];

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        console.error('Groq API error:', response.status);
        return 'Desculpe, tive um problema técnico. Tente novamente ou fale direto conosco pelo WhatsApp: +55 27 99804-1197';
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content ?? 'Desculpe, não consegui processar sua mensagem. Tente novamente.';
    } catch (error) {
      console.error('Groq API error:', error);
      return 'Desculpe, estou com problemas de conexão. Por favor, entre em contato pelo WhatsApp: +55 27 99804-1197';
    }
  },
});
