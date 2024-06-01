import './ServiceCard.css';

export type ServiceCardProps = {
  icon: JSX.Element;
  name: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  description,
  icon,
  name,
}) => {
  return (
    <div className="services__card">
      <div className="icon__container">{icon}</div>

      <h3 className="name">{name}</h3>

      <p className="text__muted description">{description}</p>
    </div>
  );
};

export default ServiceCard;
