import logoMenu from '../assets/logoMenu.png';
import Select from 'react-select';


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
            <img src={logoMenu} className='logo-menu'/>
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

const menuRamen = [
    { label:"Original Ramen", value:"original" },
    { label:'Spicy Miso Ramen', value:'spicy-miso' },
    { label:'Curry Ramen', value:'curry' },
    { label:'Shoyu Ramen', value:'shoyu' },
    { label:'Veg Ramen', value:'veg' }
];

const menuColdDrinks = [
    { label:"Happoshu", value:"happoshu" },
    { label:'Té helado', value:'te' },
    { label:'Agua 500cc', value:'aguaP' },
    { label:'Agua 1500cc', value:'aguaG' },
    { label:'Soda 500cc', value:'soda' },
    { label:'Bebida lata 350cc', value:'bebida' },
]

const menuHotDrinks = [
    { label:"Amazake", value:"amazake" },
    { label:"Shogacha", value:"shogacha" },
    { label:"Té verde", value:"teVerde" },
    { label:"Café", value:"cafe" },
    { label:"Chocolate", value:"chocolate" },
]

function MenuOrden() {

    const handleSelectChange = ({ value }) => {
        console.log(value)
    }
    return (
        <>
           <nav className='menu-select'>
           <Select 
                defaultValue = { { label: 'Ramen', value: 'title' } }
                options = { menuRamen }
                onChange = { handleSelectChange }
           />
           <Select 
                defaultValue = { { label: 'Bebidas Frías', value: 'title' } }
                options = { menuColdDrinks }
                onChange = { handleSelectChange }
           />
           <Select 
                defaultValue = { { label: 'Bebidas Calientes', value: 'title' } }
                options = { menuHotDrinks }
                onChange = { handleSelectChange }
           />
      </nav>
        </>
    )
}

function MainOrden(){
    return(
        <main className='productos-lista' >
           {/* <img src={fondoOrden} className='imagOrdenes'/> */}
            <MenuOrden />
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
