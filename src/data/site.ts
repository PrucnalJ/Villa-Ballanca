// Single source of truth. Every fact read off villaballanca.com on 2026-09-06.
// Nothing invented; open questions live in CONTENT-NEEDED.md.

export const site = {
  name: 'Villa Ballanca',
  tagline: 'Italian restaurant, catering and banquet rooms in Lower Burrell',
  url: 'https://www.villaballanca.com',
  phone: '(724) 339-6111',
  phoneHref: 'tel:+17243396111',
  email: 'info@villaballanca.com',
  address: {
    street: '2740 Leechburg Rd',
    city: 'Lower Burrell',
    state: 'PA',
    zip: '15068',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=2740+Leechburg+Rd+Lower+Burrell+PA+15068',
};

export const hours = [
  { day: 'Monday', note: 'Closed' },
  { day: 'Tuesday', note: 'Closed' },
  { day: 'Wednesday to Saturday', open: '11:00 AM', close: '9:00 PM' },
  { day: 'Sunday', open: '11:00 AM', close: '8:30 PM' },
];

export const hoursSchema = [
  { days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '11:00', closes: '21:00' },
  { days: ['Sunday'], opens: '11:00', closes: '20:30' },
];

// The three things their own site says they do. Their current homepage gives all
// three roughly equal weight in template language; here each gets a real section.
export const offerings = [
  {
    name: 'The dining room',
    detail: 'Wednesday to Sunday',
    body:
      'Italian cooking, served from eleven in the morning until nine at night, five days a week. Closed Monday and Tuesday.',
  },
  {
    name: 'Banquet rooms',
    detail: 'By reservation',
    body:
      'Private rooms for family gatherings and corporate functions, in the same building and out of the same kitchen.',
  },
  {
    name: 'Catering and to-go',
    detail: 'Order ahead',
    body:
      'A separate catering and to-go menu for events you are hosting somewhere else.',
  },
];

// Their site links two menus and no more.
export const menus = [
  { name: 'Our menu', note: 'The dining room' },
  { name: 'Catering and to-go menu', note: 'For events and collection' },
];
