import React from 'react';
import {connect} from 'react-redux';
import SearchBox from '../searchBox/searchBox';
import Navbar from '../../components/navbar/navbar';
import logo from '../../assets/img/logo.png';


const Header = (props) => {
    
    return (
        <div className="header">
            <div className="containerHeader">
                <div className="containerNavbarHeader">
                    <Navbar/>
                </div>
                <div className="headerContainerLogo">
                    <img className="logoHeader" src={logo} alt="logo"/>
                </div>
                <div className="containerSearchHeader">
                    <SearchBox/>
                </div>
                

            </div>
            <div className="textWelcome">
                    Hola, {props.user[0].nickName}!!
            </div>
            
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        
        user: state.userReducer.user
    };
};

export default connect (mapStateToProps)(Header)
