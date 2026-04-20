'use client';

import { motion } from 'framer-motion';

const whatsappMessage = encodeURIComponent(
  'Hola, vengo de la web de CHEL PROYECTAR y me gustaria solicitar un presupuesto sin compromiso.'
);

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/34614590268?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-black shadow-glow"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      WhatsApp
    </motion.a>
  );
}
