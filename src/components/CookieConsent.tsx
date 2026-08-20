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
          className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2dd4bf]/10">
              <Cookie className="size-5 text-[#2dd4bf]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Configurações de Cookies</h4>
                <button onClick={() => setShow(false)} className="text-gray-500 hover:text-white">
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-1.5 text-xs text-gray-400">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e entregar conteúdo personalizado.
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={handleReject}
                  className="flex-1 rounded-lg border border-white/20 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 rounded-lg bg-[#2dd4bf] px-3 py-2 text-xs font-bold text-black transition-colors hover:bg-[#2dd4bf]/90"
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
