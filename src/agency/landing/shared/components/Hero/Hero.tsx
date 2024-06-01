import './Hero.css';

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  return <header id="hero">HERO</header>;
};

export default Hero;
