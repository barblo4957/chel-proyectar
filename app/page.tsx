import CookieBanner from '@/components/CookieBanner';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';

const services = [
  {
    title: 'Yeso Proyectado',
    description: 'Aplicacion mecanizada de yeso para acabados uniformes, resistentes y con gran rapidez de ejecucion.'
  },
  {
    title: 'Capa Fina',
    description: 'Alisado premium para paredes y techos con terminacion elegante, lista para pintar o decorar.'
  },
  {
    title: 'Reformas Integrales',
    description: 'Transformamos viviendas y locales con planificacion, oficio y entrega profesional llave en mano.'
  },
  {
    title: 'Reparaciones y Mantenimiento',
    description: 'Soluciones efectivas para grietas, humedades y desperfectos, recuperando el aspecto original.'
  }
];

const processSteps = [
  'Primer contacto y toma de datos del proyecto.',
  'Visita tecnica y mediciones para definir necesidades.',
  'Presupuesto detallado y propuesta de plazos.',
  'Ejecucion de los trabajos con control de calidad diario.',
  'Entrega final, revision conjunta y garantia del trabajo.'
];

export default function HomePage() {
  return (
    <main id="inicio" className="relative pb-24">
      <Navbar />

      <section className="section-shell pt-20 md:pt-28">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brandMuted">CHEL PROYECTAR</p>
              <h1 className="gradient-text text-5xl leading-tight md:text-7xl">Precision y habilidad</h1>
              <p className="mt-6 max-w-2xl text-lg text-brandMuted">
                Expertos en yeso proyectado, capa fina y reformas integrales. Acabados impecables con tiempos de obra
                optimizados y compromiso total en cada detalle.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/34614590268?text=Hola%2C%20quiero%20solicitar%20presupuesto%20sin%20compromiso"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brandAccent px-6 py-3 font-semibold text-brandText transition hover:bg-[#5f92b7]"
                >
                  Pide tu presupuesto
                </a>
                <a href="#contacto" className="rounded-full border border-white/25 px-6 py-3 font-medium text-brandText">
                  Hablar con un experto
                </a>
              </div>
            </div>
            <div className="card-surface grid gap-4 p-6 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: '10+', label: 'anos de experiencia' },
                { value: '200+', label: 'proyectos completados' },
                { value: '100%', label: 'satisfaccion del cliente' }
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
          <h2 className="text-4xl text-brandText md:text-5xl">Servicios especializados</h2>
          <p className="mt-4 max-w-3xl text-brandMuted">
            Combinamos maquinaria, tecnica y acabados artesanales para ofrecer soluciones duraderas y esteticamente
            impecables.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.07}>
              <article className="card-surface h-full p-6">
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
            <h2 className="text-4xl md:text-5xl">Artesanos del yeso moderno</h2>
            <p className="mt-6 max-w-4xl text-brandMuted">
              En CHEL PROYECTAR trabajamos con precision, limpieza y respeto por los plazos. Nuestro compromiso es
              ofrecer calidad real, comunicacion transparente y resultados que superen expectativas.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Calidad tecnica', 'Compromiso con el cliente', 'Entrega puntual'].map((value) => (
                <div key={value} className="rounded-xl border border-white/10 bg-[#0a1628] p-4 text-sm text-brandMuted">
                  {value}
                </div>
              ))}
            </div>
            <a
              href="tel:+34614590268"
              className="mt-8 inline-flex rounded-full bg-brandAccent px-6 py-3 font-semibold text-brandText"
            >
              Llamar ahora: +34 614 590 268
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section id="proceso" className="section-shell mt-28">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl">Nuestro proceso</h2>
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
          <h2 className="text-4xl md:text-5xl">Galeria de trabajos</h2>
          <p className="mt-4 text-brandMuted">Muestras de acabados y reformas realizadas. Sustituiremos por fotos reales.</p>
        </ScrollReveal>
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ScrollReveal key={item} className="mb-4 break-inside-avoid">
              <div className={`card-surface p-4 ${item % 2 === 0 ? 'h-56' : 'h-72'}`}>
                <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#0a1628] text-sm text-brandMuted">
                  Espacio para foto {item}
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
              <h3 className="text-2xl">Contacto directo</h3>
              <p className="text-brandMuted">Hichamechaou</p>
              <p className="text-brandMuted">Telefono: +34 614 590 268 | +34 634 118 568</p>
              <p className="text-brandMuted">Email: Chelchaoui@gmail.com</p>
              <p className="text-brandMuted">Instagram: @Hichamechaou</p>
              <a
                href="https://wa.me/34634590568"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 font-medium text-brandText"
              >
                Escribir ahora
              </a>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <footer className="section-shell mt-24 border-t border-white/10 py-8 text-sm text-brandMuted">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CHEL PROYECTAR. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/aviso-legal" className="hover:text-brandText">
              Aviso Legal
            </a>
            <a href="/politica-de-privacidad" className="hover:text-brandText">
              Politica de Privacidad
            </a>
            <a href="/politica-de-cookies" className="hover:text-brandText">
              Politica de Cookies
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <CookieBanner />
    </main>
  );
}
