import { useNavigate, Link, Navigate } from 'react-router-dom';

function Home(props){
    console.log(props);
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <>
        <h1>HOME</h1>
        <button 
        type='button'
        onClick={() => {
            navigateTo('/ordenes');
        }}
        >
        Ordenes
        </button>

        
        <button 
        type='button'
        onClick={() => {
            navigateTo('/cocina');
        }}
        >
        Cocina
        </button>

        <Link to={'/cocina'}> 
            Cocina
        </Link>
        </>
    ) 
}

export default Home;
