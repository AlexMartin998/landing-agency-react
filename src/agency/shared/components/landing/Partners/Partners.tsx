import { partners } from '@/agency/shared/constants';
import './Partners.css';

export interface PartnersInterface {}

const Partners: React.FC<PartnersInterface> = () => {
  return (
    <section id="partners">
      <div className="container logos">
        <div className="logos__slide">
          {partners.map((partner, index) => (
            <img src={partner.logo} alt={partner.name} key={index} />
          ))}
        </div>
        <div className="logos__slide">
          {partners.map((partner, index) => (
            <img src={partner.logo} alt={partner.name} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
