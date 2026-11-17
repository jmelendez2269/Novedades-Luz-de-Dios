import type { Lang } from '../i18n/ui';

// Quotes from 5-star Google reviews in the handoff packet (17 Nov 2026 scrape).
// First names only. The packet supplies the English translations of the
// Spanish quotes; the Spanish translations of the English quotes are faithful
// translations made for this site and are always labeled as translations.

export interface Review {
  id: string;
  name: string;
  lang: Lang;
  text: string;
  translation: string;
}

export const reviews = {
  dakarai: {
    id: 'dakarai',
    name: 'Dakarai',
    lang: 'en',
    text: 'Full of spiritual merchandise. Definitely the place to go to if looking for a variety of candles scents and spiritual liquids.',
    translation:
      'Lleno de artículos espirituales. Sin duda el lugar al que hay que ir si buscas variedad de velas, aromas y líquidos espirituales.',
  },
  jcesar: {
    id: 'jcesar',
    name: 'J Cesar',
    lang: 'en',
    text: "This place has a very positive vibe. The owners are always willing to help, and if they don't have what you need, they'll make sure to get it for you. They even helped me find a guadaña which I couldn't find anywhere else online or other similar shops.",
    translation:
      'Este lugar tiene un ambiente muy positivo. Los dueños siempre están dispuestos a ayudar, y si no tienen lo que necesitas, se aseguran de conseguírtelo. Incluso me ayudaron a encontrar una guadaña que no encontraba en ningún otro lugar, ni en línea ni en otras tiendas parecidas.',
  },
  yessica: {
    id: 'yessica',
    name: 'Yessica',
    lang: 'en',
    text: "The best place in town! A place where if you go with questions, you get answers. If you need help, you'll have it. Gabriel will help in every way he can. Mayra will reveal the truth. If you look for guidance and your life is upside-down, they will show a light at the end of the tunnel.",
    translation:
      '¡El mejor lugar de la ciudad! Un lugar donde, si vas con preguntas, obtienes respuestas. Si necesitas ayuda, la tendrás. Gabriel te ayudará en todo lo que pueda. Mayra te revelará la verdad. Si buscas orientación y tu vida está de cabeza, te mostrarán una luz al final del túnel.',
  },
  michael: {
    id: 'michael',
    name: 'Michael',
    lang: 'en',
    text: 'Lovely botanica with a peaceful vibe and great selection of herbs, candles, and spiritual items. The staff is friendly and helpful. Highly recommend for anyone seeking healing or good energy.',
    translation:
      'Una botánica encantadora, con un ambiente tranquilo y una gran selección de hierbas, velas y artículos espirituales. El personal es amable y servicial. Muy recomendable para quien busque sanación o buena energía.',
  },
  ingrid: {
    id: 'ingrid',
    name: 'Ingrid',
    lang: 'es',
    text: 'Excelente lugar ! Mil 💯 garantizado !! muy buenos precios ! Y lo Mejor son (Gabriel y Mayra) realmente son personas k tienen gran corazón k realmente ayudan alas personas en todo ! Atención súper !! No son charlatanes ! Tienen ese don de sanar y limpiar a las personas que vamos por gente que nos hace daño !!',
    translation:
      'Excellent place! 100 guaranteed!! Very good prices! And the best are (Gabriel and Mayra) they really are people who have a big heart who really help people in everything! Super service!! They are not charlatans! They have that gift of healing and cleansing people who come because of people who do us harm!!',
  },
  sadya: {
    id: 'sadya',
    name: 'Sadya',
    lang: 'es',
    text: 'La Botanica tiene un poco de todo, todo lo que buscas lo puedes encontrar ahí, La atención al cliente es super, los dueños están al tanto de los clientes, responden todo tipo de pregunta! De baños and cristales, a velas, y santos! Muy muy recomendable',
    translation:
      'The botanica has a little of everything, everything you are looking for you can find there. Customer service is great, the owners look after their customers, they answer every kind of question! From baths and crystals, to candles, and saints! Highly recommended.',
  },
  jared: {
    id: 'jared',
    name: 'Jared',
    lang: 'es',
    text: 'El mejor servicio que he experimentado, atienden de lo mejor, el precio de los productos muy accesible, la calidad de los productos muy buena y una atención excelente en las lecturas de cartas, súper recomendada para cualquier persona que quiera comprar una veladora o cualquier otra cosa.',
    translation:
      'The best service I have experienced, they take care of you wonderfully, product prices are very accessible, product quality is very good, and excellent attention in the card readings, highly recommended for anyone who wants to buy a prepared candle or anything else.',
  },
} satisfies Record<string, Review>;

export type ReviewId = keyof typeof reviews;
