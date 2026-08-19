'use client';

import { api } from '@convex/_generated/api';
import { useAction } from 'convex/react';
import { useState } from 'react';

export function useMercadoPago() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPreference = useAction(api.paymentsActions.createPreference);

  const checkout = async (params: {
    planId: string;
    planName: string;
    price: number;
    customerEmail?: string;
    customerName?: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await createPreference(params);

      if (result.init_point) {
        // Redirecionar para o checkout do Mercado Pago
        window.location.href = result.init_point;
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao criar pagamento';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkout,
    isLoading,
    error,
  };
}
