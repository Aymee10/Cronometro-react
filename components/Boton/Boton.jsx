import './Boton.css';

function Boton({ texto, onClick, estilo }) {
  return (
    <button className="boton" style={estilo} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
