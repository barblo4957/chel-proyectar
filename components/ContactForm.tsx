'use client';

import { FormEvent } from 'react';
import ServiceDropdown from '@/components/ServiceDropdown';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactForm() {
  const { t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nombre = String(formData.get('nombre') ?? '').trim();
    const telefono = String(formData.get('telefono') ?? '').trim();
    const servicio = String(formData.get('servicio') ?? '').trim();
    const mensaje = String(formData.get('mensaje') ?? '').trim();

    const message = `🔧 ${t.contact.whatsappTemplate.title}

👤 ${t.contact.whatsappTemplate.name}: ${nombre}
📞 ${t.contact.whatsappTemplate.phone}: ${telefono}
🛠️ ${t.contact.whatsappTemplate.service}: ${servicio}
📝 ${t.contact.whatsappTemplate.message}: ${mensaje}`;

    const url = `https://wa.me/34614590268?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 md:p-8">
      <h2 className="text-3xl">{t.contact.formTitle}</h2>
      <div>
        <label htmlFor="nombre" className="mb-2 block text-sm text-brandMuted">
          {t.contact.name}
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-xl border border-white/15 bg-[#0a1628] px-4 py-3 text-brandText outline-none ring-brandAccent placeholder:text-brandMuted/70 focus:ring-2"
          placeholder={t.contact.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="telefono" className="mb-2 block text-sm text-brandMuted">
          {t.contact.phone}
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          className="w-full rounded-xl border border-white/15 bg-[#0a1628] px-4 py-3 text-brandText outline-none ring-brandAccent placeholder:text-brandMuted/70 focus:ring-2"
          placeholder={t.contact.phonePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="servicio" className="mb-2 block text-sm text-brandMuted">
          {t.contact.service}
        </label>
        <ServiceDropdown id="servicio" name="servicio" options={t.contact.serviceOptions} defaultValue={t.contact.serviceOptions[0]} />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm text-brandMuted">
          {t.contact.message}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full rounded-xl border border-white/15 bg-[#0a1628] px-4 py-3 text-brandText outline-none ring-brandAccent placeholder:text-brandMuted/70 focus:ring-2"
          placeholder={t.contact.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        className="inline-flex rounded-full bg-brandAccent px-6 py-3 font-semibold text-brandText transition hover:bg-[#5f92b7]"
      >
        {t.contact.submit}
      </button>
    </form>
  );
}
