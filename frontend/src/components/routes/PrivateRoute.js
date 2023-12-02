/* import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/UserContext';


const PrivateRoute = ({component: Component, ...rest}) => {

    const {authenticated} = useContext(Context);
    const navigate = useNavigate();
    return (

        <Route {...rest} render={props => (
            authenticated ?
                <Component {...props} />
            : navigate('/about')
        )} />
    );
    };

export default PrivateRoute; */