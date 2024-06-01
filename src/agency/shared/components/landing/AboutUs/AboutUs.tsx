import { BUSINESS_NAME } from '@/agency/shared/constants';
import { robot } from '@/assets/images';
import { Link } from 'react-scroll';
import './AboutUs.css';

export interface AboutUsInterface {}

const AboutUs: React.FC<AboutUsInterface> = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="info__container">
          <h1 className="main__title">
            <span className="gradient__text">{BUSINESS_NAME}</span>
          </h1>

          <h3 className="sub__title">Somos una agencia digital creativa</h3>
          <p className="text__muted description">
            En {BUSINESS_NAME}, combinamos creatividad y experiencia para
            ofrecer soluciones robustas y personalizadas que se adaptan a tus
            necesidades. Con más de 10 años en el mercado, hemos ayudado a
            empresas de todos los tamaños y sectores a alcanzar sus objetivos
            con innovadoras soluciones de Software a medida, Inteligencia
            Artificial, marketing digital y diseño gráfico.
          </p>

          <div className="buttons__container">
            <Link to="contact" smooth={true} className="btn btn__primary">
              Hablemos
            </Link>
          </div>
        </div>

        <div className="media__container">
          <div className="picture__container">
            <img src={robot} alt={BUSINESS_NAME} />
          </div>

          <h1 className="main__title">
            Soluciones <span className="gradient__text">disruptivas</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
