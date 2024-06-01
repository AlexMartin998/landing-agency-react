import { Link } from 'react-scroll';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './Hero.css';
import { Facts } from './components';

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  return (
    <header id="hero">
      <div className="overlay"></div>

      <div className="container">
        <h3 className="title">Software Development</h3>
        <h1 className="intro__title">
          <span className="gradient__text">Agencia digital</span>
          Software robusto a la medida
        </h1>

        <div className="description">
          <FaQuoteLeft className="quote__icon top" />
          <p className="text__muted">
            Bienvenido a nuestra agencia digital, donde creamos soluciones de
            software robustas y eficientes para tu proyecto. Nuestro equipo se
            destaca en la creación de aplicaciones web y móviles, diseño UI/UX y
            desarrollo de software a la medida con enfoque en la calidad. Nos
            centramos en la simplicidad, la eficiencia y la satisfacción del
            cliente, y estamos aquí para ayudarte a llevar tu proyecto al
            siguiente nivel. Creemos algo impactante juntos.
          </p>
          <FaQuoteRight className="quote__icon bottom" />
        </div>

        <div className="btn__container">
          <Link to="contact" smooth={true} className="btn btn__primary">
            Contáctanos
          </Link>
          <Link to="services" smooth={true} className="btn">
            Nuestros Servicios
          </Link>
        </div>
      </div>

      <Facts />
    </header>
  );
};

export default Hero;
