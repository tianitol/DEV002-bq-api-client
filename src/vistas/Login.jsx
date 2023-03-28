
//import fondoLogin from '../assets/fondoLogin.png';

function Login(props){
    const { setUser } = props;

    function login() {
        //aquí en vez de setear el user en true al apretar el boton login, puede crearse
        //una pormesa que al resolverse genere el login (esperar usuario y contraseña correctos)
        setUser(true);
    }
    return (
        <>
        <div className="fondo-login">
        <form className="form-login">
        
            <label >Usuario</label>
            <input type='text' placeholder="username" required='true'></input>
            <label>Contraseña</label>
            <input type='password' placeholder="******" required='true'></input>
            <button type='button' onClick={login} className='button-login'> 
                Entrar
            </button>
        </form>
        </div>
        {/* <img src={fondoLogin} className='fondo-login'/> */}
       
            
            

        </>
    );
}

export default Login;
