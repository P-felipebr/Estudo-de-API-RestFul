import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

//context
import { Context } from '../context/UserContext';

function Navbar(){

    const {authenticated, logout} = useContext(Context);

    return(
        <nav className = {styles.navbar}>
            <div className= {styles.navbar_logo}>
                <h2>Q-Lab</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {authenticated ? (

                <> <li> <Link to="/newsletters">Newsletter</Link> </li>

                <li onClick={logout}> Sair </li> </>

                ) :(

                <> 
                
                <li>
                     <Link to="/">Newsletter</Link> 
                </li>

                <li>
                    <Link to="/login">Entrar</Link>
                </li>

                <li>
                    <Link to="/register">Cadastrar</Link>
                </li> </> 
                )
                
                }
            </ul>
        </nav>
    )

}

export default Navbar;