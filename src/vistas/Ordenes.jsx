import logoMenu from '../assets/logoMenu.png';
import fondoOrden from '../assets/fondoOrden.png';


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
     <button type='button' className='salir' >
        Salir
     </button>
    )
}

function UpperHeader(){
    return(
        <div className='upper-header'>
            <UserInfo />
            <img src={logoMenu} />
            <Salir />
         
        </div>
             
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
            <UpperHeader />
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
