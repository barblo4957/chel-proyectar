'use client';

import { useEffect, useState } from 'react';

const COOKIE_KEY = 'chel_cookie_consent';

type CookieChoice = 'accepted' | 'rejected';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const saveChoice = (choice: CookieChoice) => {
    window.localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="section-shell">
        <div className="card-surface flex flex-col gap-4 rounded-2xl border border-white/20 bg-[#0a1628]/95 p-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-sm text-brandMuted">
            Usamos cookies propias y de terceros para mejorar la experiencia, analizar el trafico y mostrar contenido
            relevante conforme al RGPD y la LSSI-CE. Puedes aceptar o rechazar las cookies no esenciales.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => saveChoice('rejected')}
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-brandText transition hover:border-brandMuted"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => saveChoice('accepted')}
              className="rounded-full bg-brandAccent px-4 py-2 text-sm font-semibold text-brandText transition hover:bg-[#5f92b7]"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
