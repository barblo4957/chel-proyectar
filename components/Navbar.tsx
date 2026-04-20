'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Language } from '@/lib/translations';
import { useLanguage } from '@/components/LanguageProvider';

const languageOptions: Language[] = ['es', 'en'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '#servicios', label: t.nav.services },
    { href: '#sobre-nosotros', label: t.nav.about },
    { href: '#proceso', label: t.nav.process },
    { href: '#galeria', label: t.nav.gallery },
    { href: '#contacto', label: t.nav.contact }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition ${
        scrolled ? 'border-white/10 bg-[#050d1a]/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="whitespace-nowrap text-lg font-semibold tracking-wider text-brandText lg:text-left">
          CHEL PROYECTAR
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-white/20 p-2 text-brandText lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden items-center gap-6 text-sm text-brandMuted lg:flex xl:gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="whitespace-nowrap transition hover:text-brandText">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <div className="inline-flex rounded-full border border-white/20 p-1">
              {languageOptions.map((lang) => {
                const isActive = language === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
                      isActive ? 'bg-brandAccent text-brandText' : 'text-brandMuted hover:text-brandText'
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </li>
          <li>
            <a
              href="https://wa.me/34614590268"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brandAccent px-4 py-2 font-semibold text-brandText transition hover:bg-[#5f92b7]"
            >
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a1628]/95 lg:hidden">
          <ul className="section-shell flex flex-col items-center gap-3 py-5 text-center text-brandMuted">
            <li>
              <div className="inline-flex rounded-full border border-white/20 p-1">
                {languageOptions.map((lang) => {
                  const isActive = language === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
                        isActive ? 'bg-brandAccent text-brandText' : 'text-brandMuted hover:text-brandText'
                      }`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-1 py-2 text-[1.05rem] transition hover:text-brandText"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/34614590268"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex min-w-[280px] items-center justify-center rounded-full bg-brandAccent px-8 py-3 text-base font-semibold text-brandText"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
