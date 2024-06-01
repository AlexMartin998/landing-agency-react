import './Facts.css';

export type FactsProps = {};

const Facts: React.FC<FactsProps> = () => {
  return (
    <div className="fact__container">
      <div className="fact__item">
        <h1 className="main__title">10+</h1>
        <p className="text__muted">Años de experiencia</p>
      </div>

      <div className="fact__item">
        <h1 className="main__title">400+</h1>
        <p className="text__muted">Proyectos completados</p>
      </div>

      <div className="fact__item">
        <h1 className="main__title">600+</h1>
        <p className="text__muted">Clientes satisfechos</p>
      </div>
    </div>
  );
};

export default Facts;
