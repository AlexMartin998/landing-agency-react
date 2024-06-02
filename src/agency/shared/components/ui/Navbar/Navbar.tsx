import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoLogoBuffer } from 'react-icons/io5';
import { Link } from 'react-scroll';

import { tabs } from '@/agency/shared/constants';

import './Navbar.css';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [viewSidebar, setViewSidebar] = useState<boolean>(false);

  return (
    <nav id="navbar">
      <div className="logo__container">
        <IoLogoBuffer className="icon" />

        <h1 className="name">
          Adin<span className="color__primary gradient__text">uba</span>
        </h1>
      </div>

      <div className={`hamburger ${viewSidebar ? 'visible' : ''}`}>
        <div className="tab__group">
          <span
            className="icon__container close__btn"
            onClick={() => setViewSidebar(!viewSidebar)}
          >
            <FaTimes />
          </span>

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
              onClick={() => setViewSidebar(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="buttons__container">
        <Link
          to="contact"
          smooth={true}
          className="contact__btn btn btn__primary"
        >
          Cotáctanos
        </Link>
        <FaBars className="menu" onClick={() => setViewSidebar(!viewSidebar)} />
      </div>
    </nav>
  );
};

export default Navbar;
