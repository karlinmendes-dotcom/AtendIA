# AtendIA

Sistema de agendamento e atendimento digital para pequenos negócios.

## Sobre

A AtendIA é uma empresa de tecnologia especializada em ajudar pequenos negócios que trabalham com agendamento a se profissionalizar, organizar seus atendimentos e recuperar o tempo que perdem no dia a dia.

## Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend:** Convex (banco de dados e funções serverless)
- **Pagamentos:** Mercado Pago
- **Chatbot:** Groq API (Llama 3.3 70B)
- **Hospedagem:** Vercel / Freebuff Hosting

## Estrutura

```
src/
├── app/                    # Rotas (Next.js App Router)
│   └── [locale]/
│       ├── (marketing)/    # Páginas públicas
│       │   ├── page.tsx    # Home
│       │   ├── blog/       # Blog
│       │   ├── empresa/    # Sobre
│       │   ├── contato/    # Contato
│       │   ├── cases/      # Como funciona na prática
│       │   ├── cancelamento/ # Política de cancelamento
│       │   ├── politica-de-privacidade/
│       │   ├── termos-de-uso/
│       │   └── sucesso/    # Onboarding pós-pagamento
│       └── (auth)/         # Dashboard administrativo
├── components/             # Componentes React
├── features/               # Features por domínio
├── templates/              # Templates de página
├── locales/                # Traduções (PT/EN)
└── utils/                  # Utilitários
convex/                     # Funções Convex (backend)
```

## Planos

| Plano | Mensalidade | Implementação |
|-------|------------|---------------|
| Essencial | R$ 100/mês | R$ 450 (pagamento único) |
| Profissional | R$ 150/mês | R$ 750 (pagamento único) |
| Premium | R$ 200/mês | R$ 1.000 (pagamento único) |

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Gerar tipos Convex
npx convex dev --once

# Build de produção
npm run build
```

## Contato

- WhatsApp: +55 27 99804-1197
- E-mail: contato@atendia.com.br
