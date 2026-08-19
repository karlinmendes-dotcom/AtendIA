'use client';

import { useQuery } from 'convex/react';
import { useState } from 'react';
import { TitleBar } from '@/features/dashboard/TitleBar';
import { api } from '../../../../../convex/_generated/api';

type TabType = 'payments' | 'clients';

const statusLabels: Record<string, string> = {
  pending: '⏳ Pendente',
  completed: '✅ Pago',
  failed: '❌ Falhou',
  refunded: '💰 Reembolsado',
  aguardando_formulario: '📋 Aguardando Formulário',
  em_desenvolvimento: '🔧 Em Desenvolvimento',
  entregue: '🚀 Entregue',
  em_teste_30_dias: '🧪 Em Teste 30 Dias',
  ativo: '🟢 Ativo',
};

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
  refunded: 'bg-blue-100 text-blue-800',
  aguardando_formulario: 'bg-yellow-100 text-yellow-800',
  em_desenvolvimento: 'bg-blue-100 text-blue-800',
  entregue: 'bg-green-100 text-green-800',
  em_teste_30_dias: 'bg-purple-100 text-purple-800',
  ativo: 'bg-green-100 text-green-800',
};

function StatusBadge({ status }: { status: string }) {
  const colors = statusColors[status] || 'bg-gray-100 text-gray-800';
  const label = statusLabels[status] || status;
  return (
    <span className={`
      inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
      ${colors}
    `}
    >
      {label}
    </span>
  );
}

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export default function DashboardIndexPage() {
  const [activeTab, setActiveTab] = useState<TabType>('payments');

  const payments = useQuery(api.payments.list);
  const clients = useQuery(api.clients.list);

  const totalRevenue = payments
    ?.filter((p: (typeof payments)[number]) => p.status === 'completed')
    .reduce((sum: number, p: (typeof payments)[number]) => sum + p.amount, 0) ?? 0;

  const pendingPayments = payments?.filter((p: (typeof payments)[number]) => p.status === 'pending').length ?? 0;
  const totalClients = clients?.length ?? 0;
  const activeClients = clients?.filter((c: (typeof clients)[number]) => c.status === 'ativo').length ?? 0;

  return (
    <>
      <TitleBar
        title="Painel Administrativo"
        description="Gerencie seus clientes e acompanhe os pagamentos"
      />

      {/* Stats Cards */}
      <div className="
        mb-8 grid grid-cols-1 gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
      >
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Receita Total</div>
          <div className="mt-1 text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Pagamentos Pendentes</div>
          <div className="mt-1 text-2xl font-bold">{pendingPayments}</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Total de Clientes</div>
          <div className="mt-1 text-2xl font-bold">{totalClients}</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Clientes Ativos</div>
          <div className="mt-1 text-2xl font-bold text-green-600">{activeClients}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="
        mb-6 flex gap-1 rounded-lg border border-border bg-card p-1
      "
      >
        <button
          onClick={() => setActiveTab('payments')}
          className={`
            rounded-md px-4 py-2 text-sm font-medium transition-colors
            ${
    activeTab === 'payments'
      ? 'bg-primary text-primary-foreground'
      : `
        text-muted-foreground
        hover:bg-muted
      `
    }
          `}
        >
          💳 Pagamentos (
          {payments?.length ?? 0}
          )
        </button>
        <button
          onClick={() => setActiveTab('clients')}
          className={`
            rounded-md px-4 py-2 text-sm font-medium transition-colors
            ${
    activeTab === 'clients'
      ? 'bg-primary text-primary-foreground'
      : `
        text-muted-foreground
        hover:bg-muted
      `
    }
          `}
        >
          👥 Clientes (
          {clients?.length ?? 0}
          )
        </button>
      </div>

      {/* Content */}
      {activeTab === 'payments' && (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-4 py-3 font-medium">ID Mercado Pago</th>
                  <th className="px-4 py-3 font-medium">Plano</th>
                  <th className="px-4 py-3 font-medium">Valor</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Cliente</th>
                  <th className="px-4 py-3 font-medium">Data</th>
                </tr>
              </thead>
              <tbody>
                {payments === undefined
                  ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="
                            px-4 py-8 text-center text-muted-foreground
                          "
                        >
                          Carregando pagamentos...
                        </td>
                      </tr>
                    )
                  : payments.length === 0
                    ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="
                              px-4 py-8 text-center text-muted-foreground
                            "
                          >
                            Nenhum pagamento registrado ainda.
                          </td>
                        </tr>
                      )
                    : (
                        payments.map(payment => (
                          <tr
                            key={payment._id}
                            className="
                              border-b border-border
                              last:border-0
                            "
                          >
                            <td className="px-4 py-3 font-mono text-xs">{payment.mercadoPagoId}</td>
                            <td className="px-4 py-3 capitalize">{payment.planId}</td>
                            <td className="px-4 py-3 font-medium">{formatCurrency(payment.amount)}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={payment.status} />
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {payment.customerName || payment.customerEmail || '—'}
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {formatDate(payment.createdAt)}
                            </td>
                          </tr>
                        ))
                      )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'clients' && (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Negócio</th>
                  <th className="px-4 py-3 font-medium">Proprietário</th>
                  <th className="px-4 py-3 font-medium">Tipo</th>
                  <th className="px-4 py-3 font-medium">WhatsApp</th>
                  <th className="px-4 py-3 font-medium">Plano</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Criado em</th>
                </tr>
              </thead>
              <tbody>
                {clients === undefined
                  ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="
                            px-4 py-8 text-center text-muted-foreground
                          "
                        >
                          Carregando clientes...
                        </td>
                      </tr>
                    )
                  : clients.length === 0
                    ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="
                              px-4 py-8 text-center text-muted-foreground
                            "
                          >
                            Nenhum cliente registrado ainda.
                          </td>
                        </tr>
                      )
                    : (
                        clients.map(client => (
                          <tr
                            key={client._id}
                            className="
                              border-b border-border
                              last:border-0
                            "
                          >
                            <td className="px-4 py-3 font-medium">{client.businessName}</td>
                            <td className="px-4 py-3">{client.ownerName}</td>
                            <td className="px-4 py-3 capitalize">{client.businessType}</td>
                            <td className="px-4 py-3 font-mono text-xs">{client.phone}</td>
                            <td className="px-4 py-3 capitalize">{client.planId}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={client.status} />
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {formatDate(client.createdAt)}
                            </td>
                          </tr>
                        ))
                      )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
