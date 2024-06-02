import './ProjectNavigation.css';

import { useEffect, useState } from 'react';

export type ProjectNavigationProps = {
  tabs: string[];
  onChange: (category: string) => void;
};

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  onChange,
  tabs,
}) => {
  const [active, setActive] = useState<string>('Todos');

  useEffect(() => {
    onChange(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="project__navigation">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`btn ${active === tab ? 'active' : ''}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProjectNavigation;
