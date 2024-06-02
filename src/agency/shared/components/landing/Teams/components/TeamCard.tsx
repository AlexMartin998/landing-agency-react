import './TeamCard.css';

import { TeamsType } from '@/agency/shared/constants';

export type TeamCardProps = {
  teamItem: TeamsType;
};

const TeamCard: React.FC<TeamCardProps> = ({ teamItem }) => {
  return (
    <div className="team__card">
      <div className="profile__container">
        <img src={teamItem.profile} alt={teamItem.name} draggable="false" />
      </div>

      <div className="details">
        <h3 className="name">{teamItem.name}</h3>
        <p className="text__muted">{teamItem.title}</p>
      </div>

      <div className="social__container"></div>
    </div>
  );
};

export default TeamCard;
