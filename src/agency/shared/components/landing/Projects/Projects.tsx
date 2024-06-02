import { useState } from 'react';

import './Projects.css';

import { ProjectsType, projects } from '@/agency/shared/constants';
import { ProjectCard, ProjectNavigation } from './components';

export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const [activeProjects, setActiveProjects] =
    useState<ProjectsType[]>(projects);
  const [tabKey, setTabKey] = useState<string>('Todos');

  const getProjects = () => {
    const tabs = ['Todos'];
    projects.map(p => {
      if (!tabs.includes(p.category)) {
        tabs.push(p.category);
      }

      return tabs;
    });

    return tabs;
  };

  const setPro = (category: string) => {
    setTabKey(category);
    if (category === 'Todos') {
      setActiveProjects(projects);
    } else {
      setActiveProjects(projects.filter(p => p.category === category));
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <h1 className="main__title">
          Proyectos <span className="gradient__text">Desarrollados</span>
        </h1>
        <h3 className="sub__title">
          Algunos de los proyectos que hemos implementado
        </h3>

        {/* ========= Projects ========= */}
        <ProjectNavigation tabs={getProjects()} onChange={setPro} />

        <div className="projects__container">
          {activeProjects.map((project, index) => (
            <ProjectCard key={`${tabKey}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
