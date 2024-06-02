import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Footer.css';

import { BUSINESS_NAME, socialHandles, tabs } from '@/agency/shared/constants';

export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const scrollHandler = () => {
    if (window.scrollY > 450) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <footer id="footer">
      <button
        className={`btn btn__primary scroll__top__btn ${
          visible ? 'visible' : ''
        }`}
        onClick={() => scroll.scrollToTop()}
      >
        <FaArrowUp />
      </button>

      <div className="container">
        <div className="social__handles__container">
          {socialHandles.map((socialHandle, index) => (
            // TODO: Add href to socialHandle.link
            <span
              key={index}
              // href={socialHandle.link}
              // target="_blank"
              className="icon__container social__handle"
            >
              {socialHandle.icon}
            </span>
          ))}
        </div>

        <div className="tabs__container">
          {tabs.map((tab, idx) => (
            <Link
              className="tab__item"
              key={idx}
              to={tab.id}
              smooth={true}
              spy={true}
              offset={-225}
              duration={500}
              activeClass="active"
              // onClick={() => setViewSidebar(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        <article className="copyright__container">
          <address className="text__muted">Quito, Ecuador</address>

          <h3>
            &copy; {new Date().getFullYear()} All Rights Reserved. Develop with
            love by {BUSINESS_NAME}
          </h3>

          <p className="text__muted">Powered by {BUSINESS_NAME}</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
