import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

// Shop photos from the handoff packet (Google Maps listing, resized to a
// 2000px long edge). Originals live in src/assets/photos and are optimized at
// build time by astro:assets. Alt text follows the packet's photo manifest.
//
// Left out on purpose:
// - storefront-current-goldenhour-01: a face is visible in the lower window.
// - storefront-historic-*: the earlier purple/magenta paint is not the current look.
// - brand-*: flyers, banner proofs, and ads, kept for reference only.
// The signage close-up is used only as a crop that removes a poster with a face.

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', {
  eager: true,
});

export type PhotoTag = 'storefront' | 'interior' | 'candles' | 'shelves' | 'saints';

interface PhotoMeta {
  en: string;
  es: string;
  tags: PhotoTag[];
}

const meta = {
  'storefront-current-daylight-02': {
    en: 'The shop today: a blue and charcoal-gray storefront under a red tile roof and silver awning, with house number 806, a white door, and the Luz de Dios services poster.',
    es: 'La tienda hoy: fachada azul y gris carbón bajo un techo de teja roja y un toldo plateado, con el número 806, una puerta blanca y el letrero de servicios de Luz de Dios.',
    tags: ['storefront'],
  },
  'storefront-current-signage-closeup-04-cropped': {
    en: 'Under the awning: house number 806, a neon OPEN sign, the blue front door, and the poster listing Lectura de cartas, Productos esotéricos, Envíos de dinero, and Boletos de autobús.',
    es: 'Bajo el toldo: el número 806, un letrero de OPEN en neón, la puerta azul y el letrero con Lectura de cartas, Productos esotéricos, Envíos de dinero y Boletos de autobús.',
    tags: ['storefront'],
  },
  'interior-aisle-magenta-01': {
    en: 'An aisle with dusty-rose walls and shelves of saints, candles, and spiritual liquids.',
    es: 'Un pasillo de paredes rosadas con estantes de santos, velas y líquidos espirituales.',
    tags: ['interior'],
  },
  'interior-entry-turquoise-02': {
    en: 'The entry: a bright teal wall hung with rosaries and crosses, an open white door, and a glass case.',
    es: 'La entrada: una pared turquesa con rosarios y cruces colgados, una puerta blanca abierta y una vitrina.',
    tags: ['interior'],
  },
  'interior-aisle-statues-03': {
    en: 'A deep aisle of statues and dense, colorful shelves receding into the shop.',
    es: 'Un pasillo profundo de estatuas y estantes llenos de color que se pierden hacia el fondo de la tienda.',
    tags: ['interior', 'saints'],
  },
  'interior-mural-04': {
    en: 'A colorful painted mural wall with baskets and merchandise.',
    es: 'Una pared con un mural de colores, canastas y mercancía.',
    tags: ['interior'],
  },
  'interior-aisle-tv-05': {
    en: 'A packed aisle of bottles and goods with a television on the wall.',
    es: 'Un pasillo lleno de botellas y mercancía, con un televisor en la pared.',
    tags: ['interior'],
  },
  'interior-doorway-06': {
    en: 'A doorway with deep red walls, a white door, a glass case, and warm light.',
    es: 'Una puerta entre paredes rojo oscuro, con puerta blanca, vitrina y luz cálida.',
    tags: ['interior'],
  },
  'interior-aisle-boxes-07': {
    en: 'An aisle of boxed goods and hanging packets, looking down the shop.',
    es: 'Un pasillo de productos en caja y paquetes colgados, mirando hacia el fondo de la tienda.',
    tags: ['interior', 'shelves'],
  },
  'interior-checkout-jewelry-09': {
    en: 'The checkout counter with prepared candles, a glass jewelry case, rosaries and amulets on a magenta wall, and a Guadalupe print.',
    es: 'El mostrador con velas preparadas, una vitrina de joyería, rosarios y amuletos en una pared magenta y una imagen de la Virgen de Guadalupe.',
    tags: ['interior', 'shelves'],
  },
  'interior-turquoise-rosaries-10': {
    en: 'A turquoise wall with hanging rosaries and crosses, a pegboard of packaged goods, and a glass case of oils.',
    es: 'Una pared turquesa con rosarios y cruces colgados, un tablero de productos empacados y una vitrina de aceites.',
    tags: ['interior'],
  },
  'interior-tapestry-wall-11': {
    en: 'A packed corner with hanging packets, a colorful tapestry, and a drinks cooler.',
    es: 'Una esquina llena de paquetes colgados, un tapiz de colores y un refrigerador de bebidas.',
    tags: ['interior'],
  },
  'interior-aisle-wide-12': {
    en: 'A wide view down a magenta-walled aisle of packed shelves under a ceiling fan.',
    es: 'Vista amplia de un pasillo de paredes magenta con estantes llenos y un ventilador de techo.',
    tags: ['interior'],
  },
  'interior-aisle-clothing-13': {
    en: 'An aisle where hanging clothing sits among the spiritual goods.',
    es: 'Un pasillo con ropa colgada entre los artículos espirituales.',
    tags: ['interior', 'shelves'],
  },
  'products-candles-prepared-01': {
    en: 'Prepared glass prayer candles, some labeled Botanica y Novedades, packed on a table.',
    es: 'Veladoras preparadas en vaso de vidrio, algunas con la etiqueta Botanica y Novedades, sobre una mesa.',
    tags: ['candles'],
  },
  'products-candle-closeup-02': {
    en: 'Close-up of a yellow prepared glass candle with more candles behind it.',
    es: 'Primer plano de una veladora amarilla preparada, con más velas detrás.',
    tags: ['candles'],
  },
  'products-guadalupe-shelf-03': {
    en: 'A shelf of small bottles and prints under an image of the Virgen de Guadalupe.',
    es: 'Un estante de botellitas e imágenes bajo una imagen de la Virgen de Guadalupe.',
    tags: ['shelves', 'saints'],
  },
  'products-oils-statue-04': {
    en: 'A statue in front of shelves of oils and small bottles, with a magenta wall behind.',
    es: 'Una estatua frente a estantes de aceites y botellitas, con una pared magenta detrás.',
    tags: ['shelves', 'saints'],
  },
  'products-boxed-figurines-05': {
    en: 'Boxed bottles with colorful printed labels lined up on a shelf.',
    es: 'Botellas en caja con etiquetas de colores alineadas en un estante.',
    tags: ['shelves'],
  },
  'products-herb-jars-06': {
    en: 'Jars of herbs and prepared mixes with printed labels.',
    es: 'Frascos de hierbas y mezclas preparadas con etiquetas impresas.',
    tags: ['shelves'],
  },
  'products-flatlay-herbs-candles-07': {
    en: 'Candles, sprays, fresh herbs, and an egg arranged together.',
    es: 'Velas, aerosoles, hierbas frescas y un huevo acomodados juntos.',
    tags: ['candles', 'shelves'],
  },
  'products-saint-statues-08': {
    en: 'A table of saint statues and figurines, including white-robed figures.',
    es: 'Una mesa de estatuas de santos y figuras, entre ellas figuras de túnica blanca.',
    tags: ['saints'],
  },
  'products-packets-hanging-09': {
    en: 'Hanging packets and small bottles on pegs.',
    es: 'Paquetes y botellitas colgados en ganchos.',
    tags: ['shelves'],
  },
  'products-yellow-bottles-10': {
    en: 'Shelves of yellow bottles and hanging packets.',
    es: 'Estantes de botellas amarillas y paquetes colgados.',
    tags: ['shelves'],
  },
  'products-bath-washes-11': {
    en: 'A crate of colorful bottled baths and washes.',
    es: 'Una caja de baños y lociones en botellas de colores.',
    tags: ['shelves'],
  },
  'products-beads-12': {
    en: 'A red-and-white beaded strand against a light wall.',
    es: 'Un collar de cuentas rojas y blancas sobre una pared clara.',
    tags: ['shelves'],
  },
  'products-prepared-candle-tin-13': {
    en: 'A prepared candle in a gold-toned tin with charms and herbs in the wax.',
    es: 'Una vela preparada en lata dorada, con dijes y hierbas en la cera.',
    tags: ['candles'],
  },
  'products-orisha-statues-14': {
    en: 'A table of Orisha and related statues, including a figure labeled Ochún.',
    es: 'Una mesa de estatuas de orishas y figuras relacionadas, entre ellas una marcada Ochún.',
    tags: ['saints'],
  },
  'products-rainbow-candles-16': {
    en: 'Prepared glass candles, one striped in rainbow colors.',
    es: 'Veladoras preparadas en vaso, una con franjas de los colores del arcoíris.',
    tags: ['candles'],
  },
  'products-gold-crucifix-chain-17': {
    en: 'A gold-tone chain and crucifix on a metal counter.',
    es: 'Una cadena dorada con crucifijo sobre un mostrador de metal.',
    tags: ['shelves'],
  },
  'products-amuletos-contra-envidias-18': {
    en: 'Packaged “Amuleto Contra Envidias” charms hanging on a peg.',
    es: 'Amuletos “Contra Envidias” empacados, colgados en un gancho.',
    tags: ['shelves'],
  },
  'products-owls-shelf-19': {
    en: 'A shelf of small statues and two white owl figures.',
    es: 'Un estante de estatuas pequeñas y dos figuras de búhos blancos.',
    tags: ['saints', 'shelves'],
  },
  'products-prayer-cards-20': {
    en: 'A grid of colorful prayer and saint cards.',
    es: 'Una cuadrícula de estampas de oraciones y santos.',
    tags: ['saints', 'shelves'],
  },
  'products-flowers-statues-display-21': {
    en: 'A floral display with small statues and candles on a table.',
    es: 'Un arreglo de flores con estatuas pequeñas y velas sobre una mesa.',
    tags: ['saints'],
  },
  'products-amulets-hanging-22': {
    en: 'Hanging tassels, evil-eye charms, and amulets.',
    es: 'Borlas, dijes de ojo turco y amuletos colgados.',
    tags: ['shelves'],
  },
  'products-candle-set-23': {
    en: 'A row of prepared glass candles with printed labels.',
    es: 'Una fila de veladoras preparadas con etiquetas impresas.',
    tags: ['candles'],
  },
  'products-infant-figurine-24': {
    en: 'A robed infant religious figurine on satin cloth, with other figures behind.',
    es: 'Una figura religiosa de un niño con túnica sobre tela de satín, con otras figuras detrás.',
    tags: ['saints'],
  },
  'products-sprays-guadalupe-shelf-25': {
    en: 'Shelves of colorful spiritual sprays under Guadalupe statues and a San Judas Tadeo print.',
    es: 'Estantes de aerosoles espirituales de colores bajo estatuas de la Virgen de Guadalupe y una imagen de San Judas Tadeo.',
    tags: ['shelves', 'saints'],
  },
  'products-beads-red-black-26': {
    en: 'A red-and-black beaded strand against a light wall.',
    es: 'Un collar de cuentas rojas y negras sobre una pared clara.',
    tags: ['shelves'],
  },
  'gallery-guadalupe-wall-01': {
    en: 'The Virgen de Guadalupe on a wall with colorful candles and paper flowers.',
    es: 'La Virgen de Guadalupe en una pared con velas de colores y flores de papel.',
    tags: ['saints', 'interior'],
  },
  'gallery-altar-statues-02': {
    en: 'An altar with a lit candle and statues, shared by a customer in a Google review.',
    es: 'Un altar con una vela encendida y estatuas, compartido por un cliente en una reseña de Google.',
    tags: ['saints', 'candles'],
  },
  'gallery-santamuerte-large-03': {
    en: 'A large robed statue, still in its packing wrap, with incense boxes and other figures behind.',
    es: 'Una estatua grande con túnica, todavía en su envoltura, con cajas de incienso y otras figuras detrás.',
    tags: ['saints'],
  },
  'gallery-robed-statue-04': {
    en: 'A tall figure in an ornate black-and-gold robe standing among shelves of candles.',
    es: 'Una figura alta con túnica negra y dorada entre estantes de velas.',
    tags: ['saints', 'candles'],
  },
  'gallery-flowers-offerings-06': {
    en: 'A colorful display of flowers and statues against a bright backdrop.',
    es: 'Un arreglo de flores y estatuas de colores sobre un fondo vivo.',
    tags: ['saints'],
  },
} satisfies Record<string, PhotoMeta>;

export type PhotoKey = keyof typeof meta;

export interface Photo {
  key: PhotoKey;
  src: ImageMetadata;
  alt: Record<Lang, string>;
  tags: PhotoTag[];
}

export function getPhoto(key: PhotoKey): Photo {
  const file = files[`../assets/photos/${key}.jpg`];
  if (!file) throw new Error(`Missing photo file for "${key}"`);
  const m: PhotoMeta = meta[key];
  return { key, src: file.default, alt: { en: m.en, es: m.es }, tags: m.tags };
}

export const allPhotoKeys = Object.keys(meta) as PhotoKey[];
