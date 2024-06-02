import { contactInfo } from '@/agency/shared/constants';
import { robot3 } from '@/assets/images';
import './Contact.css';

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  return (
    <section id="contact">
      <div className="container">
        <form className="contact__form">
          <div className="contact__form__top">
            <h1 className="main__title">
              <span className="gradient__text">Creemos algo increíble</span>
            </h1>

            <p className="text__muted">
              Desarrollamos soluciones robustas adaptadas a tus necesidades. No
              dudes en contactarnos.
            </p>
          </div>

          <div className="contact__form__middle">
            <img
              src={robot3}
              alt="robot"
              className="contact__form__middle__img"
            />
          </div>
        </form>

        {/* --------- options --------- */}
        <div className="contact__options">
          {contactInfo.map((info, index) => (
            <div key={index} className="option">
              <div className="icon__container">{info.icon}</div>

              <h3 className="name">{info.name}</h3>
              <h4 className="text__muted address">{info.address}</h4>

              <div>
                <a
                  href={info.link}
                  target="_blank"
                  className="btn btn__primary"
                >
                  Hablemos
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
