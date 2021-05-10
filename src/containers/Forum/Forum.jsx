import React from 'react';
import Header from '../../components/header/header.jsx';
import gif from '../../assets/img/trabajandolo.gif';


const Forum = () => {
    return (
        <div>
            <div className="containerForum">
                <div className="headerForum">
                    <Header/>
                </div>

                <div className="textForum">
                    ¡¡EN CONSTRUCCIÓN!!
                </div>

                <div className="containerBody">
                    <div className="bodyForum">
                        <img src={gif} alt="gif"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Forum
