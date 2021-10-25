import React, { createContext } from 'react';
import useFirebase from '../Hooks/userFirebase';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;