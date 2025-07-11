import './Contador.css';

function Contador({ tiempo, color }) {
  return (
    <div className="contador" style={{ color }}>
      {tiempo} s
    </div>
  );
}

export default Contador;