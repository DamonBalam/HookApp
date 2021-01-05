import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. obtener la referencia del context
    const  { setUser } = useContext(UserContext);

    // 2. setUser
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ ()=> setUser({id:1234, name:'Arturo'}) }
            >
                Login
            </button>
        </div>
    );
}
