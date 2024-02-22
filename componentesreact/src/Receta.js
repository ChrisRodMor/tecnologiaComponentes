import './Receta.css';

function Receta({source, titulo, descripcion}) {
  return (
    <div className="meal-card">
      <div className="image-container">
        <img src={source} alt={titulo} />
      </div>
      <div className="content-container">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <button className="ver-button">Ver</button>
      </div>
    </div>
  );
}

export default Receta;
