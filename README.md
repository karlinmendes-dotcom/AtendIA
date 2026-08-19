# AtendIA - Atendentes Virtuais com IA

🤖 Atendentes virtuais e sistemas de agendamento com Inteligência Artificial para pequenos e médios negócios.

## Sobre o Projeto

A AtendIA é uma agência e Micro-SaaS focada na venda de Atendentes Virtuais e Sistemas de Agendamento com Inteligência Artificial para salões de beleza, barbearias, clínicas, lava-jatos e outros negócios.

### Modelo de Venda (Productized Service)

1. O cliente acessa o site e visualiza a proposta de valor
2. Escolhe um dos 3 planos disponíveis
3. Realiza o pagamento via Mercado Pago
4. É redirecionado para um formulário de onboarding
5. Nossa equipe faz o setup/configuração
6. Entrega o produto rodando com garantia de 30 dias

## Stack Tecnológica

| Tecnologia | Uso |
|---|---|
| **Next.js 16** | Framework React (App Router) |
| **Convex** | Banco de dados e backend realtime |
| **Mercado Pago** | Gateway de pagamentos |
| **Tailwind CSS** | Estilização |
| **Shadcn UI** | Componentes de interface |
| **TypeScript** | Type safety |
| **next-intl** | Internacionalização (PT/EN) |

## Estrutura do Projeto

```
├── convex/                    # Backend Convex (schema, funções)
│   ├── schema.ts             # Schema do banco de dados
│   ├── clients.ts            # CRUD de clientes
│   ├── payments.ts           # Pagamentos
│   ├── paymentsActions.ts    # Ações Mercado Pago (Node.js)
│   ├── onboarding.ts         # Onboarding de clientes
│   ├── plans.ts              # Planos e preços
│   └── settings.ts           # Configurações do sistema
├── src/
│   ├── app/                  # Rotas Next.js
│   │   ├── [locale]/(marketing)/    # Landing page pública
│   │   ├── [locale]/(marketing)/sucesso/  # Pós-pagamento
│   │   └── [locale]/(auth)/dashboard/     # Painel admin
│   ├── components/           # Componentes reutilizáveis
│   ├── features/             # Componentes por feature
│   ├── hooks/                # Custom hooks
│   ├── locales/              # Traduções (PT/EN)
│   ├── templates/            # Templates da landing page
│   └── utils/                # Utilitários
```

## Variáveis de Ambiente

### Para Vercel (Produção)

| Variável | Descrição | Onde configurar |
|---|---|---|
| `NEXT_PUBLIC_CONVEX_URL` | URL do deployment Convex | Vercel → Settings → Environment Variables |
| `MERCADO_PAGO_ACCESS_TOKEN` | Token de acesso do Mercado Pago | Vercel → Settings → Environment Variables |
| `NEXT_PUBLIC_APP_URL` | URL da aplicação (ex: https://atendia.vercel.app) | Vercel → Settings → Environment Variables |

## Deploy no Vercel

1. Conecte o repositório GitHub ao Vercel
2. Configure as variáveis de ambiente acima
3. O deploy é automático a cada push no `main`

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Rodar em desenvolvimento
npm run dev

# Rodar Convex em desenvolvimento
npx convex dev
```

## Planos

| Plano | Preço | Destaques |
|---|---|---|
| **Pequeno** | R$ 97/mês | Atendente Virtual, Agendamento simples, 1 usuário |
| **Médio** | R$ 197/mês | + Agendamento avançado, 3 usuários, Google Calendar |
| **Grande** | R$ 397/mês | + Ilimitado, API, Multi-unidades, Treinamento |

## Licença

MIT License
