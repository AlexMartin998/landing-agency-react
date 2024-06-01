import { BsBank2, BsCodeSquare } from 'react-icons/bs';
import { FaPaintBrush, FaRobot } from 'react-icons/fa';
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
type PartnersType = {
  name: string;
  logo: string;
};
export const partners: PartnersType[] = [
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

// // Services -----------------------
type ServicesType = {
  icon: JSX.Element;
  name: string;
  description: string;
};
export const services: ServicesType[] = [
  {
    icon: <BsCodeSquare />,
    name: 'Desarrollo de Software',
    description: `
      Desarrollamos software a medida para empresas y startups.
    `,
  },

  {
    icon: <FaRobot />,
    name: 'Automatización',
    description: `
        Automatizamos procesos con soluciones de IA y Software.
    `,
  },
  {
    icon: <BsBank2 />,
    name: 'Facturación Electrónica',
    description: `
        Desarrollamos sistemas de facturación electrónica para empresas.
    `,
  },
  {
    icon: <FaPaintBrush />,
    name: 'Diseño Gráfico',
    description: `
        Diseñamos la identidad visual de tu empresa o producto.
    `,
  },
];

// // AboutUs -----------------------
export const BUSINESS_NAME = 'Adinuba Agency';
export const aboutUs = {
  title: 'Nosotros',
  description: `
    Somos una empresa de desarrollo de software con más de 10 años de experiencia en el mercado.
  `,
  image: 'https://via.placeholder.com/300',
};
