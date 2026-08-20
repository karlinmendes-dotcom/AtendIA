'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('atendia_cookie_consent');
    if (!consent) {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('atendia_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem('atendia_cookie_consent', 'rejected');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <Cookie className="size-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">Configurações de Cookies</h4>
                <button onClick={() => setShow(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e entregar conteúdo personalizado.
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={handleReject}
                  className="flex-1 rounded-lg border border-border px-3 py-2 text-xs font-medium transition-colors hover:bg-muted"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
