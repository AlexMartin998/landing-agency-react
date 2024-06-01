import {
  AboutUs,
  Contact,
  Partners,
  Projects,
  Services,
  Teams,
  Testimonials,
} from '@/agency/shared/components/landing';
import { Footer, Navbar } from '@/agency/shared/components/ui';
import { Hero } from '../../shared/components';

export interface LandingPageInterface {}

const LandingPage: React.FC<LandingPageInterface> = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Partners />
      <Services />
      <AboutUs />
      <Projects />
      <Teams />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
