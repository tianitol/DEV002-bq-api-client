import logoMenu from '../assets/logoMenu.png';
import Select from 'react-select';
import React, { useState } from 'react';


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

function HeaderOrden(){
    return(
        <header className='header'>
            <UpperHeader />
            {/* <NavButton /> */}
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

function NuevaOrden() {

    const handleSelectChange = ({ value }) => {
        console.log(value)
    }
    return (
        <>
        <div className='rigth-order'>
        <h3 className='h3-order'>
            nº Orden
        </h3>
        <input type='number' placeholder='00' required='true' className='input-order'/>
        <h3 className='h3-order'>
            Nombre Cliente
        </h3>
        <input type='text' placeholder='Clara' required='true' className='input-order'/>

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
      </div>
        </>
    )
}

function MainOrden(){

    const [nOButtonClicked, setnOButtonClicked] = useState(false);
    const handlenOButtonClick = () => {
        setnOButtonClicked(true)
    }

    return(
        <>
        <nav className='button-nav'>
        <button type='button' onClick={handlenOButtonClick}>
            NUEVA ORDEN
        </button>
        <button type='button'>
            ORDENES
        </button>
     </nav>
        <main className='productos-lista' >
            { nOButtonClicked ? <NuevaOrden/>:null }
        </main>
        </>
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
