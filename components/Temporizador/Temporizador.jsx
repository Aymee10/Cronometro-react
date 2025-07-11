import { useState, useEffect, useRef } from 'react';
import Contador from '../Contador/Contador'
import Boton from '../Boton/Boton'


function Temporizador(){
  const tiempoInicial=30;
  const [tiempoRestante, setTiempoRestante] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const intervaloRef = useRef(null);
  const beepSoundRef = useRef(null);


  useEffect(() => {
    beepSoundRef.current = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
  }, []);

  useEffect(() => {
    if (isRunning && tiempoRestante > 0) {
      intervaloRef.current = setInterval(() => {
        setTiempoRestante(t => t - 1);
      }, 1000);
    } else {
      clearInterval(intervaloRef.current);
    }
    return () => clearInterval(intervaloRef.current);
  }, [isRunning, tiempoRestante]);

  useEffect(() => {
    if (tiempoRestante === 0 && beepSoundRef.current) {
      beepSoundRef.current.play();
      setIsRunning(false);
    }
  }, [tiempoRestante]);

  const toggleRun = () => {
    if (tiempoRestante > 0) setIsRunning(!isRunning);
  };

  const reiniciar = () => {
    setIsRunning(false);
    setTiempoRestante(tiempoInicial);
  };

  const color = tiempoRestante <= 10 ? 'red' : 'black';

return(
<div className='div-Temporizador'>

       <Contador tiempo={tiempoRestante} color={color} />
      <div>
        <Boton texto={isRunning ? 'Pausar' : 'Iniciar'} onClick={toggleRun} />
        <Boton texto="Reiniciar" onClick={reiniciar} />
      </div>
        {tiempoRestante > 10 && tiempoRestante <= 20 &&<p>¡Casi Casi!</p>}
        {tiempoRestante <= 10 && <p>¡Vamos bien!</p>}
   </div>)
}
export default Temporizador;