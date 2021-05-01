import React, { useEffect, useState } from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import { SHOWCOMIC, SHOWCOUNT } from '../../redux/types/comicTypes.js';
import { SAVE } from '../../redux/types/saveComicTypes.js';
import spinner from '../../assets/img/Half-Moon-Loading.svg';
import Carousel from '../../components/carousel/carousel';



//public key: 4ef40f88776b5c1623dbd39d7b611a3f

//private key: 06a4e13b6180baf929314b52e8a52bde173f6f7f

//ts: 1

//hash: 2c50d7a4dc290b8c68573a4ae46682e7

const Principal = (props) => {
    console.log("pepe", props)
    const [comic, setComic] = useState({
        comics: []
    });

    // const [list, setList] = useState({
    //     lists: []
    // });

    const history = useHistory();

    //  useEffect(()=>{ 
    //      getList();
    //      //eslint-disable-next-line
    //  },[])

    // const getList = async () => {
    //     const listLastCollection = await axios.get('https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=lastWeek&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7');
 
    //     props.dispatch({type: SHOWCOUNT, payload: listLastCollection.data.data});
    //     setList({

    //         ...list, lists: listLastCollection.data.data
    //     })

    // }

    const getComic = async (characterId) =>{
        const comicCollection = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7`);
        props.dispatch({type: SHOWCOMIC, payload: comicCollection.data.data});

        setComic({

            ...comic, comics: comicCollection.data.data
        });

        return setTimeout(() => {history.push('/result')},100);
        
    }
    
    const saveComic = (product) =>{

        props.dispatch({type: SAVE, payload: product});

        setTimeout(()=>{history.push('/show-comic')}, 200);
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
                    <h1>COMICFLIX</h1>
                </div>
                <Carousel/>
                <div className="prueba">
                        {props.count?.results.map(product=>{
                            return(

                                <div className="prueba1" onClick={()=>saveComic(product)} key={product.id}>
                                    <img src={`${product.thumbnail.path}.${product.thumbnail.extension}`} classname="pruebaImg"/>
                                </div>
                            )
                        })}
                    </div>
                <div className="containerLastComic">
                    
                </div>
                <div className="containerCharacter">
                    <div className="getSpiderman">1<button onClick={()=>getComic(1009610)}id="buttonLogin">Login</button></div>
                    <div className="getIronman">2<button id="buttonLogin">Login</button></div>
                    <div className="getBlackPanther">3<button id="buttonLogin">Login</button></div>
                    <div className="getDeadpool">4<button id="buttonLogin">Login</button></div>
                    <div className="getCaptainAmerica">5<button id="buttonLogin">Login</button></div>
                    <div className="getThor">6<button id="buttonLogin">Login</button></div>
                    <div className="getHult">7<button id="buttonLogin">Login</button></div>
                    <div className="getAvengers">8<button id="buttonLogin">Login</button></div>

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