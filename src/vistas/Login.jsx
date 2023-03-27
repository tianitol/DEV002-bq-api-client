

function Login(props){
    const { setUser } = props;

    function login() {
        //aquí en vez de setear el user en true al apretar el boton login, puede crearse
        //una pormesa que al resolverse genere el login (esperar usuario y contraseña correctos)
        setUser(true);
    }
    return (
        <>
            <h1>Login</h1>
            <button type='button' onClick={login}> 
                Sign in 
            </button>

        </>
    );
}

export default Login;
