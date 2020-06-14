import {Route,Redirect} from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({ component : Component , Auth , ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  )