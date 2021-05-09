import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import axios from "axios";
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import { TOTAL_CART, CLEAN } from '../../redux/types/cartTypes'; 



const Market = (props) => {
    console.log("props market", props)
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
        console.log("priceTotal", priceTotal)
        props.dispatch({type: TOTAL_CART, payload: priceTotal });
        
    };

    const emptyCart = () => {
        //vaciamos el carrito con un dispatch que igual a 0 el contenido

        props.dispatch({type: CLEAN, payload: [] });
        
        
    };

    // const changeQuantity = (operation, product) => {
    //     if(operation === "more"){

    //         //Incremento la cantidad y guardo en RDX
		

    //         props.dispatch({type: EDIT, 
            
    //             payload: {
	// 			title: product.title,
	// 			newQuantity: product.inCart + 1
    //             }
	// 		})

    //     }else{

    //         //Decremento la cantidad y guardo en RDX

    //         props.dispatch({type: EDIT, 
            
    //             payload: {
    //             title: product.title,
    //             newQuantity: product.inCart - 1
    //             }
	// 		})

    //     };
    // };

    



    

    // let body = {
    //     titleComic: props.saveComic.title,
    //     imageComic: `${props.saveComic.thumbnail.path}.${props.saveComic.thumbnail.extension}`,
    //     price: props.saveComic.prices[0].price,
    //     iduser: props.user[0].id,
    // }
    
    // const buyComic = async () => {
    //     const result = await axios.post('http://127.0.0.1:8000/api/order', body)
        

    //     if(result){
    //         alert('Has hecho la compra!! En breve te llegará a casa');
    //         setTimeout(()=>{
    //             history.push('/principal')
    //         },1000);
    //     }else{
    //         alert('No se ha realizado correctamente la compra');
    //     }
    // };



    return (
        <div>
            <div className="containerMarket">
                <div className="headerMarket">
                    <Header/>
                </div>
                <div className="comicsCart">
                    {props.cart.map(prod =>{
                        return (
                            <div className="comicsFinalBuy" key={prod.title+ "bfn"}>
                                <div className="textComicBuy">{prod.title}</div>
                                <div><img className="imgComicBuy" src={prod.image}/></div>
                                <div>{prod.price}</div>
                                {/* <button></button> */}
                                {/* <div className="btnTrolley">
                                    <button onClick={()=>changeQuantity("less", prod)}>-</button>
                                </div> */}

                            </div>
                        )
                    })}
                </div>
                <div className="totalPrice">
                    El total es de {props.totalCart} €
                </div>
                <button onClick={()=> emptyCart()}>Vaciar Compra</button>



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
