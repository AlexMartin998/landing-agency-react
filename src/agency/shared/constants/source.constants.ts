import {
  amazon,
  facebook,
  google,
  linkedin,
  microsoft,
  netflix,
  paypal,
  samsung,
  skype,
  whatsapp,
} from '../../../assets/images';

export type TabContent = {
  name: string;
  id: string;
};
export const tabs: TabContent[] = [
  { name: 'Home', id: 'hero' },
  { name: 'Servicios', id: 'services' },
  { name: 'Nosotros', id: 'about' },
  { name: 'Proyectos', id: 'projects' },
  { name: 'Equipo', id: 'teams' },
];

// // Partners -----------------------
export const partners = [
  {
    name: 'Amazon',
    logo: amazon,
  },
  {
    name: 'Facebook',
    logo: facebook,
  },
  {
    name: 'Google',
    logo: google,
  },
  {
    name: 'LinkedIn',
    logo: linkedin,
  },
  {
    name: 'Microsoft',
    logo: microsoft,
  },
  {
    name: 'Netflix',
    logo: netflix,
  },
  {
    name: 'PayPal',
    logo: paypal,
  },
  {
    name: 'Samsung',
    logo: samsung,
  },
  {
    name: 'Skipe',
    logo: skype,
  },
  {
    name: 'Whatsapp',
    logo: whatsapp,
  },
];
