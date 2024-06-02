import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './ProjectCard.css';

import { ProjectsType } from '@/agency/shared/constants';

export type ProjectCardProps = {
  project: ProjectsType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);

    const timer = setTimeout(() => {
      setLoad(false);
    }, 891);

    // Clean up function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [project]);

  return (
    <div className={`project__card ${load ? 'zoom__in' : ''}`}>
      <div className="image__container">
        <img src={project.image} alt={project.name} draggable={false} />
      </div>

      <h3 className="name">{project.name}</h3>
      <p className="text__muted description">{project.description}</p>

      <div className="buttons">
        <Link to="contact" smooth={true} className="btn btn__primary">
          Cotizar
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
