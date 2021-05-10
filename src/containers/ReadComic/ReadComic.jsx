import React from 'react';
import Header from '../../components/header/header.jsx';
import gif from '../../assets/img/trabajandolo.gif';

const ReadComic = () => {
    return (
        <div>
            <div className="containerRead">
                <div className="headerRead">
                    <Header/>
                </div>


                <div className="containerBodyRead">
                    <div className="bodyRead">
                        <img src={gif} alt="gif"/>
                    </div>
                </div>
                
                <div className="textRead">
                    ¡¡EN CONSTRUCCIÓN!!
                </div>
            </div>
            
        </div>
    )
}

export default ReadComic
