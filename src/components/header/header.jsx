import React from 'react';
import SearchBox from '../searchBox/searchBox';
import Navbar from '../../components/navbar/navbar';
import logo from '../../assets/img/logo.jpg';


const Header = () => {
    return (
        <div>
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
            
            
        </div>
    )
}

export default Header
