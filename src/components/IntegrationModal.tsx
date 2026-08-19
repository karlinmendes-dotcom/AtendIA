'use client';

import { api } from '@convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { AlertCircle, CheckCircle2, Database, Info, RefreshCw, X } from 'lucide-react';
import { useState } from 'react';

export function IntegrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const notifications = useQuery(api.notifications.getLatest);
  const triggerStatus = useMutation(api.notifications.create);

  const handleTestConnection = async () => {
    setLoading(true);
    try {
      await triggerStatus({
        title: 'Banco de Dados Conectado',
        message: 'Sincronização com o Convex realizada com sucesso em tempo real.',
        type: 'success',
      });
    } catch {
      await triggerStatus({
        title: 'Erro na Integração',
        message: 'Falha ao comunicar com o servidor Convex.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const typeStyles = {
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300',
    error: 'bg-destructive/10 border-destructive/20 text-destructive',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300',
  };

  const typeIcons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
  };

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* Botão de Status */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm
          font-medium text-primary-foreground shadow-lg transition-all
          hover:opacity-90
        "
      >
        <Database className="size-4" />
        Status da Integração
      </button>

      {/* Pop-up do Banco de Dados */}
      {isOpen && (
        <div className="
          absolute right-0 bottom-14 w-80 rounded-2xl border border-border
          bg-card p-4 shadow-2xl transition-all
          sm:w-96
        "
        >
          <div className="
            flex items-center justify-between border-b border-border pb-3
          "
          >
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="
                  absolute inline-flex size-full animate-ping rounded-full
                  bg-emerald-400 opacity-75
                "
                />
                <span className="
                  relative inline-flex size-2.5 rounded-full bg-emerald-500
                "
                />
              </span>
              <h4 className="text-sm font-semibold">Conexão Convex Database</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="
                text-muted-foreground
                hover:text-foreground
              "
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Feed de Notificações */}
          <div className="max-h-60 space-y-2.5 overflow-y-auto py-3">
            {notifications && notifications.length > 0
              ? (
                  notifications.map((item) => {
                    const Icon = typeIcons[item.type] ?? Info;
                    return (
                      <div
                        key={item._id}
                        className={`
                          flex items-start gap-3 rounded-xl border p-3 text-xs
                          ${typeStyles[item.type] ?? typeStyles.info}
                        `}
                      >
                        <Icon className="mt-0.5 size-4 shrink-0" />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="opacity-90">{item.message}</p>
                        </div>
                      </div>
                    );
                  })
                )
              : (
                  <p className="py-4 text-center text-xs text-muted-foreground">
                    Nenhum evento registrado no banco.
                  </p>
                )}
          </div>

          <button
            onClick={handleTestConnection}
            disabled={loading}
            className="
              mt-2 flex w-full items-center justify-center gap-2 rounded-xl
              bg-secondary px-4 py-2 text-xs font-medium
              text-secondary-foreground transition-all
              hover:bg-secondary/80
              disabled:opacity-50
            "
          >
            <RefreshCw className={`
              size-3.5
              ${loading ? 'animate-spin' : ''}
            `}
            />
            {loading ? 'Testando Conexão...' : 'Sincronizar Agora'}
          </button>
        </div>
      )}
    </div>
  );
}
