import React from 'react';
import linkedin from '../../assets/img/logolinkedin.png';
import github from '../../assets/img/logogithub.png';


const Footer = () => {
    return (
        
        <div className="footerHome">
            <a href='https://www.linkedin.com/in/carlos-val' target="linkedin"> <img className="footerLinkedin"src={linkedin} alt="fgd"/></a>
            <a href='https://github.com/Carlos-Val' target="github"><img className="footerGit"src={github} alt="gfds"/></a>
        </div> 

            
        
    )
}

export default Footer
