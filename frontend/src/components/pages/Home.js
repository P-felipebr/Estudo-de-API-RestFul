import React from 'react';

import api from "../utils/api";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

 import styles from './Home.module.css'; 

function Home(){

    const [newsletters, setNewsletters ] = useState([]);
    
    useEffect(() => {

        api.get('/newsletters').then((response) => {
            setNewsletters(response.data.newsletters);
        })

    }, []);

    return(
        <section>
            <h1>Home</h1>
            <div>
                {newsletters.length > 0 && 
                    newsletters.map((newsletter) => (
                        <div> 
                            <img src={newsletter.image} alt=""></img>
                            <h3>{newsletter.title}</h3>
                            <Link to={`newsletters/${newsletter._id}`}>Ler Mais</Link>
                        </div>
                    ))
                }
                {newsletters.length === 0 && (
                    <p>Não a noticias Ciradas</p>
                )}
            </div>
        </section>
    )

}

export default Home;