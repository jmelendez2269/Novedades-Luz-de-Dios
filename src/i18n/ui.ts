export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export type PageId = 'home' | 'products' | 'gallery' | 'about' | 'visit';

const slugs: Record<PageId, string> = {
  home: '',
  products: 'products',
  gallery: 'gallery',
  about: 'about',
  visit: 'visit',
};

export const pageOrder: PageId[] = ['home', 'products', 'gallery', 'about', 'visit'];

/** The static paths every page file exports: "/" for English, "/es/" for Spanish. */
export function langPaths() {
  return [{ params: { lang: undefined } }, { params: { lang: 'es' } }];
}

export function langFromParam(param: string | undefined): Lang {
  return param === 'es' ? 'es' : 'en';
}

export function pathFor(page: PageId, lang: Lang): string {
  const slug = slugs[page];
  const prefix = lang === 'es' ? '/es' : '';
  if (!slug) return `${prefix}/`;
  return `${prefix}/${slug}/`;
}

/** Strings shared across pages. Page-specific copy lives in each page's file. */
export const ui = {
  en: {
    skip: 'Skip to content',
    nav: {
      home: 'Home',
      products: 'Products & Services',
      gallery: 'Gallery',
      about: 'About',
      visit: 'Visit',
    },
    menu: 'Menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    switchTo: 'Ver en español',
    switchLabel: 'Language',
    call: 'Call',
    callFull: 'Call (336) 314-1821',
    directions: 'Get directions',
    location: 'Burlington, North Carolina',
    hoursTitle: 'Hours',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdays: 'Monday – Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    today: 'Today',
    am: 'AM',
    pm: 'PM',
    googleReview: 'Google review',
    translation: 'Translation from Spanish',
    reviewsSummary: '5.0 stars from 144 Google reviews',
    footerTagline: 'Candles, herbs, spiritual goods, card readings, and everyday help on West Webb Avenue.',
    footerNav: 'Pages',
    footerVisit: 'Find us',
    lightbox: {
      label: 'Photo viewer',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
      of: 'of',
    },
  },
  es: {
    skip: 'Saltar al contenido',
    nav: {
      home: 'Inicio',
      products: 'Productos y servicios',
      gallery: 'Galería',
      about: 'Nosotros',
      visit: 'Visítanos',
    },
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
    switchTo: 'View in English',
    switchLabel: 'Idioma',
    call: 'Llamar',
    callFull: 'Llamar al (336) 314-1821',
    directions: 'Cómo llegar',
    location: 'Burlington, Carolina del Norte',
    hoursTitle: 'Horario',
    days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    daysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    weekdays: 'Lunes – viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
    today: 'Hoy',
    am: 'a. m.',
    pm: 'p. m.',
    googleReview: 'Reseña en Google',
    translation: 'Traducción del inglés',
    reviewsSummary: '5.0 estrellas en 144 reseñas de Google',
    footerTagline: 'Velas, hierbas, artículos espirituales, lectura de cartas y ayuda de todos los días en West Webb Avenue.',
    footerNav: 'Páginas',
    footerVisit: 'Encuéntranos',
    lightbox: {
      label: 'Visor de fotos',
      close: 'Cerrar',
      prev: 'Foto anterior',
      next: 'Foto siguiente',
      of: 'de',
    },
  },
} as const;

export type UI = (typeof ui)[Lang];

/** "18:30" -> "6:30 PM" (en) or "6:30 p. m." (es). */
export function formatTime(hhmm: string, lang: Lang): string {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? ui[lang].pm : ui[lang].am;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}
