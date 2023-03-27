import logoMenu from '../assets/logoMenu.png';
import fondoOrden from '../../public/fondoOrden.png';


function UserInfo() {
   return( 
    <section className='idUser'>
        <h2>
            Nombre
        </h2>
        <h3>
            Rol
        </h3>
    </section>
    )
}

function Salir(){
    return(
     <button type='button' className='salir'>
        Salir
     </button>
    )
}

function NavButton(){
    return(
        <nav className='button-nav'>
            <button type='button'>
                NUEVA ORDEN
            </button>
            <button type='button'>
                ORDENES
            </button>
         </nav>
    )
}

function HeaderOrden(){
    return(
        <header className='header'>
            <UserInfo />
            <Salir />
            <img src={logoMenu} />
            <NavButton />
        </header>
    )
}

function MainOrden(){
    return(
        <main className='productos-lista' >
            <img src={fondoOrden} className='imagOrdenes'/>
        </main>
    )
}
function Ordenes(props){
  

    console.log(props);

    return (
    <>
     <HeaderOrden />
     <MainOrden />

</>
)
}

export default Ordenes;
