import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
    const returnUrl = window.location.host;
    return (<>
        {isLoading ? <></> : 
            isAuthenticated
                ?<button onClick = { () => logout({ returnTo: returnUrl }) }>Logout</button>
            : <button onClick={() => { loginWithRedirect() }}>Login</button>
        }
        
    </>);
}

export default Login;