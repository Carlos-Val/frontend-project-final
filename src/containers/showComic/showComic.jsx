import React, { useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../../components/header/header.jsx';
import { Button } from 'reactstrap';
import Footer from '../../components/Footer/Footer.jsx';
import {ADD} from '../../redux/types/cartTypes';



const Buy = (props) => {
    console.log(props, "props")
    const history = useHistory();

    const [msgError, setMsgError] = useState('');

    const addComic = (prod) => {
        
        let dataProduct = []
        
        if(prod === props.saveComic.title){
            dataProduct = {
                title: props.saveComic.title,
                price: props.saveComic.prices[0].price,
                image: `${props.saveComic.thumbnail.path}.${props.saveComic.thumbnail.extension}`,
                inCart: 0

            }
        }

        for(let item of props.cart){
            if(dataProduct.title === item.title){
                setMsgError('Este producto ya ha sido añadido anteriormente');
                return; 
            }
        }

        //añadimos un producto más al carrito 
        dataProduct.inCart = dataProduct.inCart + 1;
        
        //guardariamos el producto en RDX
        props.dispatch({type: ADD, payload: dataProduct});
        
        return setTimeout(() => {
            history.push('/principal')
          }, 1000)
    }


    return(
        <div>
            <div className="headerShowComic">
                <Header/>
            </div>

            <div className="containerShowComic">
                <div className="dataShowComic">
                    <div className="titleShowComic">
                        Titulo: {props.saveComic.title}
                    </div>
                    <div className="textShowComic">
                        <div className="creator">
                            <div className="containerCreator">
                                <div className="creatorJob">
                                    {props.saveComic.creators.items.map(job =>
                                        <div className="job">{job.role}:</div>)}
                                </div>
                                <div className="creatorEmployee">
                                    {props.saveComic.creators.items.map(employee =>
                                        <div className="employee">{employee.name}</div>)}
                                </div>

                            </div>
                            
                            <div>Precio: {props.saveComic.prices[0].price} €</div>

                            <div className="btnBuy" >
                                <Button color='danger' onClick={()=>addComic(props.saveComic.title)}>Añadir al carrito</Button>
                                
                            </div>
                        </div>
                        <div className="imgShowComic">
                            <img className="thumbnailShowComic"src={`${props.saveComic.thumbnail.path}.${props.saveComic.thumbnail.extension}`} alt="super"/>
                        </div>
                        
                    </div>

                </div>              


            </div>
            <Footer/>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        saveComic: state.saveComicReducer.saveComic,
        user: state.userReducer.user,
        cart : state.cartReducer.cart
        
    }
}

export default connect(mapStateToProps)(Buy);