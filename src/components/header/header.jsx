import React from 'react';
import {connect} from 'react-redux';
import SearchBox from '../searchBox/searchBox';
import Navbar from '../../components/navbar/navbar';
import logo from '../../assets/img/logo.png';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router';


const Header = (props) => {

    let history = useHistory();


    const takeMeToNext = (destino) => {
        setTimeout(()=>{
            history.push(`/${destino}`);
        },500);
    }
    
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
            <div className="containerWelcomeCart">
                <div className="textWelcome">
                    Hola, {props.user?.nickName}!!
                </div>
                <div className="containerForumCart">
                    <div className="goViewForum">
                        <a href='/forum' target="_blank">Foros</a>
                    </div>
                    <div className="containerCart">
                        <div onClick={()=> takeMeToNext('market')}><Cart/></div>
                    </div>
                </div>
                
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
