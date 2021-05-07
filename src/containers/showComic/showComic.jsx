import React from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../../components/header/header.jsx';



const Buy = (props) => {

    console.log("props", props)

    const history = useHistory();

    let body = {
        titleComic: props.saveComic.title,
        imageComic: `${props.saveComic.thumbnail.path}.${props.saveComic.thumbnail.extension}`,
        price: props.saveComic.prices[0].price,
        iduser: props.user[0].id,
    }
    
    const buyComic = async () => {
        const result = await axios.post('http://127.0.0.1:8000/api/order', body)
        

        if(result){
            alert('Has hecho la compra!! En breve te llegará a casa');
            setTimeout(()=>{
                history.push('/principal')
            },1000);
        }else{
            alert('No se ha realizado correctamente la compra');
        }
    };


    return(
        <div>
            <div className="headerShowComic">
                <Header/>
            </div>

        

            <div className="containerShowComic">
                Titulo: {props.saveComic.title}
                <img src={`${props.saveComic.thumbnail.path}.${props.saveComic.thumbnail.extension}`} alt="super"/>
                <button id="buttonLogin" onClick={()=>buyComic()}>Precio: {props.saveComic.prices[0].price} €</button>


            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        saveComic: state.saveComicReducer.saveComic,
        user: state.userReducer.user,
        
    }
}

export default connect(mapStateToProps)(Buy);