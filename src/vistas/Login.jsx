

function Login(props){
    const { setUser } = props;

    function login() {
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
