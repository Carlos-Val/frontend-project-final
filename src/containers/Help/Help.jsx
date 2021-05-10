import React from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/Footer/Footer';


const Help = () => {
    return (
        
        <div className="containerHelp">
            <div className="headerHelp">
                <Header/>
            </div>

            <div className="textHelp">
                <div className="textTitleHelp"><p>¿Necesitas ayuda?</p></div>
                <div className="textExplainHelp"><p>¡Ahora, ponerse en contacto con Carlangas Comic es más fácil que nunca si lo haces desde la aplicación de Carlangas Comic, entrando en el perfil de nuestro desarrollador le podrá ayudar en sus dudas y consultas de Carlangas Comic.</p><br/>
                <p>Clickea en la foto!!</p></div>

            </div>
            <div className="helpPhotoDeveloper">
                <a href='https://github.com/Carlos-Val' target="_blank"><img className='photoDevelopers'src='https://avatars.githubusercontent.com/u/75422798?v=4' alt='el_guapo'/></a>
            </div>


        <Footer/> 
        </div>
    )
}

export default Help
