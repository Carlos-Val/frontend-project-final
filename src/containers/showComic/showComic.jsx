import React from 'react';
import axios from "axios";
import {connect} from 'react-redux';



const Buy = (props) => {

    console.log("props", props.saveComic)


    return(

        <div className="containerShowComic">
            Titulo: {props.saveComic.title}
            <button id="buttonLogin">Precio: {props.saveComic.prices[0].price} €</button>
            

        </div>
    )

}
const mapStateToProps = state => {
    return {
        saveComic: state.saveComicReducer.saveComic
    }
}

export default connect(mapStateToProps)(Buy);