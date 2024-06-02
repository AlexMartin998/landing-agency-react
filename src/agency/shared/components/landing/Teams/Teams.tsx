import './Teams.css';

import { teams } from '@/agency/shared/constants';
import { TeamCard } from './components';

export interface TeamsInterface {}

const Teams: React.FC<TeamsInterface> = () => {
  return (
    <section id="teams">
      <div className="container">
        <h1 className="main__title">
          Nuestro
          <span className="gradient__text"> Equipo</span>
        </h1>
        <p className="text__muted description">
          Conoce a nuestro equipo de trabajo, personas apasionadas por la
          tecnología e innovación.
        </p>

        <div className="team__container">
          {teams.map((team, index) => (
            <TeamCard key={index} teamItem={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
