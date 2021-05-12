import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import axios from "axios";
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import { TOTAL_CART, CLEAN, REMOVE } from '../../redux/types/cartTypes'; 
import { Button } from 'reactstrap';
import Footer from '../../components/Footer/Footer';



const Market = (props) => {

    const history = useHistory();

    useEffect(()=>{
        calculeTotal();
    },[]);

    useEffect(()=>{
        calculeTotal();
    },);

    const calculeTotal = () => {

        let priceTotal = 0;

        props.cart.map(resume=>{
            return priceTotal += (resume.price * resume.inCart);
        })

        props.dispatch({type: TOTAL_CART, payload: priceTotal });
        
    };

    const emptyCart = () => {
        //vaciamos el carrito con un dispatch que igual a 0 el contenido

        props.dispatch({type: CLEAN, payload: [] });
        
        
    };


    
    const buyComic = async (prod, index) => {

        let body = {
            titleComic: prod.title,
            imageComic: prod.image,
            price: prod.price,
            iduser: props.user.id,
        }

        // const result = await axios.post('http://127.0.0.1:8000/api/order', body);
        const result = await axios.post('https://backend-comic.herokuapp.com/api/order', body);

        props.dispatch({type: REMOVE, payload: index})
        
        if(result){
            alert('Has hecho la compra!! En breve te llegará a casa');
             setTimeout(()=>{
                 history.push('/principal')
             },1000);
        }
    };



    return (
        <div>
            <div className="containerMarket">
                <div className="headerMarket">
                    <Header/>
                </div>
                <div className="listComicsCart">
                    {props.cart.map((prod, index) =>{
                        return (
                            <div className="comicsFinalBuy" key={prod.title+ "bfn"}>
                                <div className="textComicBuy">{prod.title}</div>
                                <div className="contImgComicBuy"><img className="imgComicBuy" src={prod.image} alt="alt"/></div>
                                <div className="priceBuy">{prod.price}€</div>
                                <Button color="danger" onClick={()=> buyComic(prod, index)}>Comprar</Button>
                            </div>
                        )
                    })}
                </div>
                <div className="containerPriceBtn">
                    <div className="totalPrice">
                        El total es de {props.totalCart} €
                    </div>
                    <div className="btnEmpty">
                        <Button onClick={()=> emptyCart()}>Vaciar Compra</Button>
                    </div>
                </div>

                <Footer/>
                



            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        saveComic: state.saveComicReducer.saveComic,
        user: state.userReducer.user,
        cart : state.cartReducer.cart,
        totalCart : state.cartReducer.totalCart
        
    }
}

export default connect(mapStateToProps)(Market)
