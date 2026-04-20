'use client';

import CookieBanner from '@/components/CookieBanner';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage() {
  const { t } = useLanguage();

  const services = t.services.cards;
  const processSteps = t.process.steps;

  return (
    <main id="inicio" className="relative pb-24">
      <Navbar />

      <section className="section-shell pt-20 md:pt-28">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brandMuted">{t.hero.eyebrow}</p>
              <h1 className="gradient-text text-5xl leading-tight md:text-7xl">{t.hero.headline}</h1>
              <p className="mt-6 max-w-2xl text-lg text-brandMuted">{t.hero.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/34614590268?text=${encodeURIComponent(t.whatsapp.message)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brandAccent px-6 py-3 font-semibold text-brandText transition hover:bg-[#5f92b7]"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a href="#contacto" className="rounded-full border border-white/25 px-6 py-3 font-medium text-brandText">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="card-surface grid gap-4 p-6 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: '10+', label: t.hero.stats[0] },
                { value: '200+', label: t.hero.stats[1] },
                { value: '100%', label: t.hero.stats[2] }
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-[#0a1628] p-5">
                  <p className="text-3xl font-bold text-brandText">{stat.value}</p>
                  <p className="mt-1 text-sm text-brandMuted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="servicios" className="section-shell mt-28">
        <ScrollReveal>
          <h2 className="text-4xl text-brandText md:text-5xl">{t.services.title}</h2>
          <p className="mt-4 max-w-3xl text-brandMuted">{t.services.subtitle}</p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.07}>
              <article className="card-surface h-full p-6">
                <p className="mb-3 inline-flex rounded-full border border-brandAccent/50 px-3 py-1 text-xs uppercase tracking-[0.14em] text-brandMuted">
                  {service.tag}
                </p>
                <h3 className="text-2xl text-brandText">{service.title}</h3>
                <p className="mt-3 text-brandMuted">{service.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="sobre-nosotros" className="section-shell mt-28">
        <ScrollReveal>
          <div className="card-surface p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl">{t.about.title}</h2>
            <p className="mt-6 max-w-4xl text-brandMuted">{t.about.body}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.about.values.map((value) => (
                <div key={value} className="rounded-xl border border-white/10 bg-[#0a1628] p-4 text-sm text-brandMuted">
                  {value}
                </div>
              ))}
            </div>
            <a
              href="tel:+34614590268"
              className="mt-8 inline-flex rounded-full bg-brandAccent px-6 py-3 font-semibold text-brandText"
            >
              {t.about.phoneCta}
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section id="proceso" className="section-shell mt-28">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl">{t.process.title}</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-4">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step} delay={index * 0.05}>
              <div className="card-surface flex items-start gap-4 p-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brandAccent font-bold text-brandText">
                  {index + 1}
                </span>
                <p className="pt-1 text-brandMuted">{step}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="galeria" className="section-shell mt-28">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl">{t.gallery.title}</h2>
          <p className="mt-4 text-brandMuted">{t.gallery.subtitle}</p>
        </ScrollReveal>
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ScrollReveal key={item} className="mb-4 break-inside-avoid">
              <div className={`card-surface p-4 ${item % 2 === 0 ? 'h-56' : 'h-72'}`}>
                <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#0a1628] text-sm text-brandMuted">
                  {t.gallery.placeholder} {item}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="contacto" className="section-shell mt-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="card-surface h-full space-y-5 p-6 md:p-8">
              <h3 className="text-2xl">{t.contact.directTitle}</h3>
              <p className="text-brandMuted">Hichamechaou</p>
              <p className="text-brandMuted">
                {t.contact.phoneLabel}: +34 614 590 268 | +34 634 118 568
              </p>
              <p className="text-brandMuted">{t.contact.emailLabel}: Chelchaoui@gmail.com</p>
              <p className="text-brandMuted">{t.contact.instagramLabel}: @Hichamechaou</p>
              <a
                href="https://wa.me/34634590568"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 font-medium text-brandText"
              >
                {t.contact.directCta}
              </a>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <footer className="section-shell mt-24 border-t border-white/10 py-8 text-sm text-brandMuted">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} CHEL PROYECTAR. {t.footer.rights}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/aviso-legal" className="hover:text-brandText">
              {t.footer.legal}
            </a>
            <a href="/politica-de-privacidad" className="hover:text-brandText">
              {t.footer.privacy}
            </a>
            <a href="/politica-de-cookies" className="hover:text-brandText">
              {t.footer.cookies}
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <CookieBanner />
    </main>
  );
}
