import React from 'react';
import {connect} from 'react-redux';
import carrito from '../../assets/img/carrito.png';



const Cart = (props) => {

    
    let totalElementsCart = props.cart.length;

    return(
    
        <div className="elementCart">
            <img className="iCart" src={carrito} alt="alt"/><div className="cntdadCart">{totalElementsCart}</div>
        </div>
    
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(Cart);