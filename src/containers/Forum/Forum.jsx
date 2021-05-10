import React from 'react';
import Header from '../../components/header/header.jsx';
import gif from '../../assets/img/trabajando2.gif';


const Forum = () => {
    return (
        <div>
            <div className="containerForum">
                <div className="headerForum">
                    <Header/>
                </div>


                <div className="containerBody">
                    <div className="bodyForum">
                        <img className="imgForum" src={gif} alt="gif"/>
                    </div>
                </div>
                
                <div className="textForum">
                    ¡¡EN CONSTRUCCIÓN!!
                </div>
            </div>
        </div>
    )
}

export default Forum
