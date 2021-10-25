import React, {useContext, createContext, useState } from 'react';
import {
    Route,
    Redirect,
    useLocation,
    useHistory
  } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user} = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(user.email)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email ? children
           : 
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
        }
      />
    );
};

export default PrivateRoute;