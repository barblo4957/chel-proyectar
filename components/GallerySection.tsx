'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/components/LanguageProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

const GALLERY_COUNT = 3;

export default function GallerySection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = useMemo(
    () =>
      Array.from({ length: GALLERY_COUNT }, (_, index) => {
        const number = index + 1;
        return {
          src: `/gallery/gallery${number}.webp`,
          alt: `${t.gallery.photoAltPrefix} ${number}`
        };
      }),
    [t.gallery.photoAltPrefix]
  );

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + GALLERY_COUNT) % GALLERY_COUNT;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % GALLERY_COUNT;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <section id="galeria" className="section-shell mt-28">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl">{t.gallery.title}</h2>
        <p className="mt-4 text-brandMuted">{t.gallery.subtitle}</p>
      </ScrollReveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <ScrollReveal key={image.src} delay={index * 0.07}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${t.gallery.openLightbox} ${index + 1}`}
              className="card-surface group w-full overflow-hidden text-left transition hover:ring-2 hover:ring-brandAccent/60"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  priority={index === 0}
                />
                <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050d1a]/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.lightboxLabel}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label={t.gallery.closeLightbox}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#0a1628]/90 p-2 text-brandText transition hover:border-brandAccent"
            >
              <X size={22} />
            </button>

            {GALLERY_COUNT > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  aria-label={t.gallery.previousPhoto}
                  className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-[#0a1628]/90 p-2 text-brandText transition hover:border-brandAccent sm:block"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label={t.gallery.nextPhoto}
                  className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-[#0a1628]/90 p-2 text-brandText transition hover:border-brandAccent sm:block"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-[min(82vh,720px)] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <p className="absolute bottom-4 text-sm text-brandMuted">
              {activeIndex + 1} / {GALLERY_COUNT}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
