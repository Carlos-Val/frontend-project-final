import React, { useEffect, useState } from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import { SHOWCOMIC, SHOWCOUNT } from '../../redux/types/comicTypes.js';
//import { SAVE } from '../../redux/types/saveComicTypes.js';
import spinner from '../../assets/img/spinner.gif';
import Carousel from '../../components/carousel/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import spiderman from '../../assets/img/logospiderman.png';
import ironman from '../../assets/img/logoironman.png';
import blackPanther from '../../assets/img/logoblack.png';
import deadpool from '../../assets/img/logodeadpool.png';
import captainAmerica from '../../assets/img/logocaptain.png';
import thor from '../../assets/img/logothor.png';
import hulk from '../../assets/img/logohulk.png';
import avengers from '../../assets/img/logoavengers.png';
import Header from '../../components/header/header.jsx';


//public key: 4ef40f88776b5c1623dbd39d7b611a3f

//private key: 06a4e13b6180baf929314b52e8a52bde173f6f7f

//ts: 1

//hash: 2c50d7a4dc290b8c68573a4ae46682e7

const Principal = (props) => {
    
    const [comic, setComic] = useState({
        comics: []
    });

    const [list, setList] = useState({
        lists: []
    });

    const[dropdown, setDropdown] = useState(false);

    const history = useHistory();

    const openCloseDropdown=()=>{
        setDropdown(!dropdown);
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            getListInitial();
        },5000)
        return () => clearTimeout(timeOut);
        
    },[])

    useEffect(() =>{
        getList();
    })


    
    const getComic = async (characterId) =>{
        const comicCollection = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7`);
        props.dispatch({type: SHOWCOMIC, payload: comicCollection.data.data});

        setComic({

            ...comic, comics: comicCollection.data.data
        });

        return setTimeout(() => {history.push('/total')},100);
    }

     const getList = async (lastComics) => {
         const listLastCollection = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=${lastComics}&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7`);
      
         props.dispatch({type: SHOWCOUNT, payload: listLastCollection.data.data});
        setList({
            ...list, lists: listLastCollection.data.data
         })
      
     }

     const getListInitial = async () => {
         const listLastCollection = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=lastWeek&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7`);
      
         props.dispatch({type: SHOWCOUNT, payload: listLastCollection.data.data});
        setList({
            ...list, lists: listLastCollection.data.data
         })
      
     }
    
        
    if(!props.count?.results){
        
        return (
            <div>
                
                <div className="spinnerContainer">
                    <img src={spinner} alt="spinner"/>
                </div>
                
            </div>
        )
    
    }else{
        return(
            <div className="containerPrincipal">
                <div className="headerPrincipal">
                    <Header></Header>
                    <h1>COMICFLIX</h1>
                </div>
                <div className="containerCarousel">
                    <div className="titleCarousel">
                        <Dropdown isOpen={dropdown} toggle={openCloseDropdown} direction="right">
                            <DropdownToggle caret className="btnDropdown">
                                Novedades
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>getList("lastWeek")}>Última semana</DropdownItem>
                                <DropdownItem onClick={()=>getList("thisWeek")}>Esta semana</DropdownItem>
                                <DropdownItem onClick={()=>getList("nextWeek")}>Próxima semana</DropdownItem>
                                <DropdownItem onClick={()=>getList("thisMonth")}>Este mes</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                   
                    <Carousel/>
                </div>
                <div className="containerLastComic">
                    
                </div>
                <div className="containerCharacter">
                    <div className="getCharacter">1<img src={spiderman} onClick={()=>getComic(1009610)} id="logoSuper"/></div>
                    <div className="getCharacter">2<img src={ironman} onClick={()=>getComic(1009368)} id="logoSuper"/></div>
                    <div className="getCharacter">3<img src={blackPanther} onClick={()=>getComic(1009187)} id="logoSuper"/></div>
                    <div className="getCharacter">4<img src={deadpool} onClick={()=>getComic(1009268)} id="logoSuper"/></div>
                    <div className="getCharacter">5<img src={captainAmerica} onClick={()=>getComic(1017575)} id="logoSuper"/></div>
                    <div className="getCharacter">6<img src={thor} onClick={()=>getComic(1009664)} id="logoSuper"/></div>
                    <div className="getCharacter">7<img src={hulk} onClick={()=>getComic(1009351)} id="logoSuper"/></div>
                    <div className="getCharacter">8<img src={avengers} onClick={()=>getComic(1009165)} id="logoSuper"/></div>

                </div>
            </div>
        
        )
    }
};

const mapStateToProps = state => {
    return{
        comic: state.comicReducer.comic,
        count: state.comicReducer.count,
        user: state.userReducer.user
    };
};


export default connect(mapStateToProps)(Principal)