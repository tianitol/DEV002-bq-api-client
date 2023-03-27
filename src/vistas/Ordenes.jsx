import { useNavigate } from 'react-router-dom';
import logoMenu from '../assets/logoMenu.png';

function Ordenes(props){
  

    console.log(props);

    return (
    <>
    <header className='header'>
    <section className='idUser'>
        <h2>
            Nombre
        </h2>
        <h3>
            Rol
        </h3>
    </section>

    
    <button type='button' className='salir'>
        Salir
    </button>

    <img src={logoMenu} />
    <div>
    <button type='button'>
    NUEVA ORDEN
    </button>
    <button type='button'>
    ORDENES
    </button>
    </div>
    
</header> 
<main className='productos-lista' >
aqui va la imagen del ramen como fondo
</main>
</>
)
}

export default Ordenes;
