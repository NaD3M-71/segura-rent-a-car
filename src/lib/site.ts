// Datos del negocio en un solo lugar. Para cambiar un telefono o un horario, se edita aca.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.seguraesquel.com.ar'

export const CITY = 'Esquel'
export const REGION = 'Chubut'

export const rentACar = {
  name: 'Segura Rent a Car',
  phone: '+54 9 2945 697732',
  whatsapp: '5492945697732', // formato internacional sin + ni espacios
  email: 'juansegurabr@hotmail.com',
  hours: '9:00 a 21:00 hs',
  owner: 'Juan Segura',
  street: 'A. P. Justo 26',
  postalCode: 'U9200',
  lat: -42.9117998,
  lng: -71.3050805,
}

export const taxi = {
  name: 'Taxi Segura',
  phone: '+54 9 2945 419923',
  whatsapp: '5492945419923',
  hours: '6:00 a 22:00 hs (24 horas con reserva)',
}

export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}
