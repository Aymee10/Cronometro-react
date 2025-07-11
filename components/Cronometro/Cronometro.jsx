import { useState, useEffect, useRef } from 'react';
import Contador from '../Contador/Contador'
import Boton from '../Boton/Boton'


function Cronometro(){
  const [tiempo, setTiempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervaloRef = useRef(null);
  
  useEffect(() => {
    if (isRunning) {
      intervaloRef.current = setInterval(() => {
        setTiempo(t => t + 1);
      }, 1000);
    } else {
      clearInterval(intervaloRef.current);
    }
    return () => clearInterval(intervaloRef.current);
  }, [isRunning, tiempo]);

const toggleRun = () => {
     setIsRunning(!isRunning);
  };

  const reiniciar = () => {
    setIsRunning(false);
    setTiempo(0);
  };
  
return(
<div className='div-Cronometro'>

       <Contador tiempo={tiempo} color="black" />
      <div>
        <Boton texto={isRunning ? 'Pausar' : 'Iniciar'} onClick={toggleRun} />
        <Boton texto="Reiniciar" onClick={reiniciar} />
      </div>
      
   </div>)
}
export default Cronometro;