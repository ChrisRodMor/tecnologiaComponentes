import './Receta.css';

function Receta({source, titulo, descripcion}) {
  return (
    <div className="meal-card">

        <img src={source} alt={'imagen'} />

        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <button className="ver-button">Ver</button>
        
    </div>
  );
}

export default Receta;
