// Facts from the handoff packet. Do not add fields that the packet does not
// support (no email, no website, no prices, no credentials).

export const business = {
  name: 'Botanica & Novedades Luz de Dios',
  shortName: 'Luz de Dios',
  phoneDisplay: '(336) 314-1821',
  phoneHref: 'tel:+13363141821',
  phoneE164: '+1-336-314-1821',
  address: {
    street: '806 W Webb Ave',
    streetLong: '806 West Webb Avenue',
    city: 'Burlington',
    region: 'NC',
    regionLong: 'North Carolina',
    postalCode: '27217',
    country: 'US',
  },
  geo: { latitude: 36.101946, longitude: -79.4469062 },
  mapsUrl:
    'https://www.google.com/maps/place/Botanica+%26+Novedades+Luz+de+Dios/@36.101946,-79.4469062,17z/data=!3m1!4b1!4m6!3m5!1s0x88532bd80058889b:0xe4e1f425e595a0c0!8m2!3d36.101946!4d-79.4469062!16s%2Fg%2F11g1q7dhx1',
  // 0 = Sunday ... 6 = Saturday, 24-hour "HH:MM" strings.
  hours: [
    { day: 0, open: null, close: null },
    { day: 1, open: '10:00', close: '18:30' },
    { day: 2, open: '10:00', close: '18:30' },
    { day: 3, open: '10:00', close: '18:30' },
    { day: 4, open: '10:00', close: '18:30' },
    { day: 5, open: '10:00', close: '18:30' },
    { day: 6, open: '10:00', close: '17:00' },
  ] as const,
  rating: { stars: '5.0', count: 144 },
} as const;

export const disclaimer =
  'Preview concept, not affiliated with Botanica & Novedades Luz de Dios';
