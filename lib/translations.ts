export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      services: 'Servicios',
      about: 'Sobre nosotros',
      process: 'Proceso',
      gallery: 'Galeria',
      contact: 'Contacto',
      cta: 'Pide tu presupuesto'
    },
    hero: {
      eyebrow: 'CHEL PROYECTAR',
      headline: 'Precision y habilidad',
      subheadline:
        'Expertos en yeso proyectado, capa fina y reformas integrales. Acabados impecables con tiempos de obra optimizados y compromiso total en cada detalle.',
      ctaPrimary: 'Pide tu presupuesto',
      ctaSecondary: 'Hablar con un experto',
      stats: ['anos de experiencia', 'proyectos completados', 'satisfaccion del cliente']
    },
    services: {
      title: 'Servicios especializados',
      subtitle:
        'Combinamos maquinaria, tecnica y acabados artesanales para ofrecer soluciones duraderas y esteticamente impecables.',
      cards: [
        {
          title: 'Yeso Proyectado',
          description: 'Aplicacion mecanizada de yeso para acabados uniformes, resistentes y con gran rapidez de ejecucion.',
          tag: 'Aplicacion mecanizada'
        },
        {
          title: 'Capa Fina',
          description: 'Alisado premium para paredes y techos con terminacion elegante, lista para pintar o decorar.',
          tag: 'Acabado premium'
        },
        {
          title: 'Reformas Integrales',
          description: 'Transformamos viviendas y locales con planificacion, oficio y entrega profesional llave en mano.',
          tag: 'Proyecto completo'
        },
        {
          title: 'Reparaciones y Mantenimiento',
          description: 'Soluciones efectivas para grietas, humedades y desperfectos, recuperando el aspecto original.',
          tag: 'Soluciones rapidas'
        }
      ]
    },
    about: {
      title: 'Artesanos del yeso moderno',
      body:
        'En CHEL PROYECTAR trabajamos con precision, limpieza y respeto por los plazos. Nuestro compromiso es ofrecer calidad real, comunicacion transparente y resultados que superen expectativas.',
      values: ['Calidad tecnica', 'Compromiso con el cliente', 'Entrega puntual'],
      phoneCta: 'Llamar ahora: +34 614 590 268'
    },
    process: {
      title: 'Nuestro proceso',
      steps: [
        'Primer contacto y toma de datos del proyecto.',
        'Visita tecnica y mediciones para definir necesidades.',
        'Presupuesto detallado y propuesta de plazos.',
        'Ejecucion de los trabajos con control de calidad diario.',
        'Entrega final, revision conjunta y garantia del trabajo.'
      ]
    },
    gallery: {
      title: 'Galeria de trabajos',
      subtitle: 'Muestras de acabados y reformas realizadas. Sustituiremos por fotos reales.',
      placeholder: 'Espacio para foto'
    },
    contact: {
      formTitle: 'Solicita tu presupuesto',
      name: 'Nombre',
      phone: 'Telefono',
      service: 'Tipo de servicio',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      phonePlaceholder: 'Tu numero',
      messagePlaceholder: 'Cuentanos brevemente tu proyecto',
      submit: 'Enviar por WhatsApp',
      directTitle: 'Contacto directo',
      phoneLabel: 'Telefono',
      emailLabel: 'Email',
      instagramLabel: 'Instagram',
      directCta: 'Escribir ahora',
      serviceOptions: ['Yeso proyectado', 'Capa fina', 'Reforma integral', 'Reparacion y mantenimiento'],
      whatsappTemplate: {
        title: 'Nueva solicitud de presupuesto',
        name: 'Nombre',
        phone: 'Telefono',
        service: 'Servicio',
        message: 'Mensaje'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      legal: 'Aviso Legal',
      privacy: 'Politica de Privacidad',
      cookies: 'Politica de Cookies'
    },
    cookie: {
      text:
        'Usamos cookies propias y de terceros para mejorar la experiencia, analizar el trafico y mostrar contenido relevante conforme al RGPD y la LSSI-CE. Puedes aceptar o rechazar las cookies no esenciales.',
      reject: 'Rechazar',
      accept: 'Aceptar'
    },
    whatsapp: {
      aria: 'Contactar por WhatsApp',
      text: 'WhatsApp',
      message: 'Hola, vengo de la web de CHEL PROYECTAR y me gustaria solicitar un presupuesto sin compromiso.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About us',
      process: 'Process',
      gallery: 'Gallery',
      contact: 'Contact',
      cta: 'Request a quote'
    },
    hero: {
      eyebrow: 'CHEL PROYECTAR',
      headline: 'Precision and skill',
      subheadline:
        'Experts in machine plastering, fine coat finishing, and full refurbishments. Impeccable finishes, optimized timelines, and total commitment in every detail.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'Talk to an expert',
      stats: ['years of experience', 'completed projects', 'client satisfaction']
    },
    services: {
      title: 'Specialized services',
      subtitle:
        'We combine machinery, technique, and craftsmanship to deliver durable solutions with flawless aesthetics.',
      cards: [
        {
          title: 'Machine Plastering',
          description: 'Mechanical plaster application for uniform, durable finishes with high execution speed.',
          tag: 'Mechanical application'
        },
        {
          title: 'Fine Coat Finish',
          description: 'Premium smooth finish for walls and ceilings, ready for paint and decoration.',
          tag: 'Premium finish'
        },
        {
          title: 'Full Refurbishments',
          description: 'We transform homes and commercial spaces with planning, craftsmanship, and turnkey delivery.',
          tag: 'Complete project'
        },
        {
          title: 'Repairs and Maintenance',
          description: 'Effective solutions for cracks, dampness, and damage, restoring your surfaces to top condition.',
          tag: 'Fast solutions'
        }
      ]
    },
    about: {
      title: 'Craftsmen of modern plaster',
      body:
        'At CHEL PROYECTAR we work with precision, cleanliness, and respect for deadlines. Our commitment is to deliver real quality, transparent communication, and results that exceed expectations.',
      values: ['Technical quality', 'Client commitment', 'On-time delivery'],
      phoneCta: 'Call now: +34 614 590 268'
    },
    process: {
      title: 'Our process',
      steps: [
        'First contact and project briefing.',
        'Technical visit and measurements to define requirements.',
        'Detailed quote and schedule proposal.',
        'Execution of works with daily quality control.',
        'Final delivery, joint review, and workmanship guarantee.'
      ]
    },
    gallery: {
      title: 'Project gallery',
      subtitle: 'Samples of completed finishes and refurbishments. Real photos will be added soon.',
      placeholder: 'Photo placeholder'
    },
    contact: {
      formTitle: 'Request your quote',
      name: 'Name',
      phone: 'Phone',
      service: 'Service type',
      message: 'Message',
      namePlaceholder: 'Your name',
      phonePlaceholder: 'Your phone number',
      messagePlaceholder: 'Tell us briefly about your project',
      submit: 'Send via WhatsApp',
      directTitle: 'Direct contact',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      instagramLabel: 'Instagram',
      directCta: 'Message now',
      serviceOptions: ['Machine plastering', 'Fine coat finish', 'Full refurbishment', 'Repairs and maintenance'],
      whatsappTemplate: {
        title: 'New quote request',
        name: 'Name',
        phone: 'Phone',
        service: 'Service',
        message: 'Message'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy'
    },
    cookie: {
      text:
        'We use first-party and third-party cookies to improve your experience, analyze traffic, and show relevant content under GDPR and LSSI-CE regulations. You can accept or reject non-essential cookies.',
      reject: 'Reject',
      accept: 'Accept'
    },
    whatsapp: {
      aria: 'Contact on WhatsApp',
      text: 'WhatsApp',
      message: 'Hello, I am visiting CHEL PROYECTAR website and I would like to request a no-obligation quote.'
    }
  }
} as const;

export type Translations = (typeof translations)[Language];
