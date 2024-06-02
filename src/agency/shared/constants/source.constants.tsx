import { AiFillGithub } from 'react-icons/ai';
import { BsBank2, BsCodeSquare, BsWhatsapp } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';
import { FaPaintBrush, FaRobot, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiFiverr } from 'react-icons/si';

import {
  amazon,
  avatar02,
  avatat01,
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
export const BUSINESS_NAME = 'Name Agency';
export const aboutUs = {
  title: 'Nosotros',
  description: `
    Somos una empresa de desarrollo de software con más de 10 años de experiencia en el mercado.
  `,
  image: 'https://via.placeholder.com/300',
};

// // Projects -----------------------
export type ProjectsType = {
  id: number;
  category: string;
  name: string;
  description: string;
  image: string;
  url: string;
};
export const projects: ProjectsType[] = [
  {
    id: 1,
    category: 'Web',
    name: 'Delivery Web App',
    description:
      'Web App de delivery para restaurantes, con seguimiento en tiempo real de los pedidos.',
    image:
      'https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/6c7a695e5d4f0a947b2714c4edb39899.jpg?resize=400x300&vertical=center',
    url: 'https://github.com',
  },
  {
    id: 2,
    category: 'Apps',
    name: 'Mobile ecommerce',
    description:
      'App móvil de ecommerce con carrito de compras y administración de productos para Android a iOS.',
    image:
      'https://cdn.dribbble.com/userupload/6613763/file/original-a15b50e48bb642c55f405d582c04d0e6.png',
    url: 'https://github.com',
  },
  {
    id: 3,
    category: 'Web',
    name: 'ERP System',
    description:
      'ERP a medida para empresas, con módulos de contabilidad, inventario, ventas, compras, facturación electrónica y más.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*lrz788UiRbPakyVe.png',
    url: 'https://github.com',
  },
  {
    id: 4,
    category: 'Web',
    name: 'POS System',
    description:
      'Sistema de punto de venta para tiendas, con módulos de ventas, inventario, caja, reportes y más.',
    image:
      'https://i.pinimg.com/originals/dc/bf/5f/dcbf5f8ba32d8ff36cd30d36a820aa5e.png',
    url: 'https://github.com',
  },
  {
    id: 5,
    category: 'Web',
    name: 'System Control',
    description:
      'Sistema de control de procesos para juntas de agua potable, con módulos de usuarios, roles, medidores, facturación y más.',
    image:
      'https://cdn.dribbble.com/userupload/8606261/file/original-591d573b6e1715663cf3c4f29da1f1c5.png?resize=400x0',
    url: 'https://github.com',
  },

  {
    id: 6,
    category: 'UI/UX',
    name: 'Diseño Gráfico & UI/UX',
    description:
      'Diseño, marketing y rebranding para empresas y productos digitales.',
    image:
      'https://cdn.dribbble.com/users/4813218/screenshots/14667363/dribbble_shot_hd_-_1__1_.png',
    url: 'https://github.com',
  },
];

// // Teams -----------------------
export type TeamsType = {
  name: string;
  title: string;
  profile: string;
  social?: { name: string; icon: JSX.Element; url: string }[];
};
export const teams = [
  {
    name: 'José',
    title: 'Fullstack Developer',
    profile: avatat01,
    social: [
      // { name: 'Facebook', icon: <CiFacebook />, url: 'http://facebook.com' },
      // { name: 'LinkedIn', icon: <CiLinkedin />, url: 'http://linkedin.com' },
      // {
      //   name: 'Youtube',
      //   icon: <FaYoutube />,
      //   url: 'https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1',
      // },
      // { name: 'Instagram', icon: <FaInstagram />, url: 'http://instagram.com' },
    ],
  },
  {
    name: 'Adrian',
    title: 'Fullstack Developer',
    profile: avatat01,
    social: [],
  },
  {
    name: 'John',
    title: 'Graphic Designer',
    profile: avatat01,
    social: [],
  },
];

// // Testimonials -----------------------
export type TestimoniesType = {
  profile: string;
  name: string;
  content: string;
};
export const testimonies: TestimoniesType[] = [
  {
    profile: avatar02,
    name: 'Luis',
    content:
      'El sistema de control de procesos ha sido vital para nuestra junta de agua potable.',
  },
  {
    profile: avatar02,
    name: 'Sofía',
    content:
      'La app de delivery ha transformado nuestro negocio. Ahora podemos gestionar pedidos en tiempo real.',
  },
  {
    profile: avatar02,
    name: 'Juan',
    content:
      'El sistema ERP a medida nos ha permitido optimizar todos nuestros procesos administrativos.',
  },
  {
    profile: avatar02,
    name: 'Pedro',
    content:
      'El Sistema POS es intuitivo y ha mejorado la eficiencia en nuestra tienda.',
  },
  {
    profile: avatar02,
    name: 'Ana',
    content:
      'La app móvil de ecommerce es perfecta. Nos encanta la funcionalidad del carrito de compras.',
  },
];

// // Contact -----------------------
export type ContactInfoType = {
  name: string;
  icon: JSX.Element;
  address: string;
  link: string;
};
export const contactInfo: ContactInfoType[] = [
  {
    name: 'Email',
    icon: <MdOutlineEmail />,
    address: 'mradinuba@gmail.com',
    link: 'mailto:mradinuba@gmail.com',
  },
  {
    name: 'Messenger',
    icon: <RiMessengerLine />,
    address: 'Emmanuel Eze',
    link: 'http://m.me/profile.php?id=100076751404019',
  },
  {
    name: 'WhatsApp',
    icon: <BsWhatsapp />,
    address: '+2347039681695',
    link: 'https://api.whatsapp.com/send?phone=+2347039681695',
  },
];

// // Footer -----------------------
export type SocialHandlesType = {
  name: string;
  icon: JSX.Element;
  link: string;
};
export const socialHandles: SocialHandlesType[] = [
  {
    name: 'Fiverr',
    icon: <SiFiverr />,
    link: '',
  },
  {
    name: 'Github',
    icon: <AiFillGithub />,
    link: '',
  },
  {
    name: 'LinkedIn',
    icon: <CiLinkedin />,
    link: '',
  },
  {
    name: 'Youtube',
    icon: <FaYoutube />,
    link: '',
  },
];
