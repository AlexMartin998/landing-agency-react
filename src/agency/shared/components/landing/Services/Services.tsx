import './Services.css';

import { services } from '@/agency/shared/constants';
import { ServiceCard } from './components';

export interface ServicesInterface {}

const Services: React.FC<ServicesInterface> = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top">
          <h1 className="main__title">
            Nuestros <span className="gradient__text">Servicios</span>
          </h1>

          <h3 className="sub__title">
            Nos especializamos en el desarrollo de software a medida
          </h3>
        </div>

        <div className="services__container">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
