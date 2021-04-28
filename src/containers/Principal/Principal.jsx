import React, { useEffect, useState } from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import { SHOW } from '../../redux/types/comicTypes.js';
import spinner from '../../assets/img/Half-Moon-Loading.svg';


//public key: 4ef40f88776b5c1623dbd39d7b611a3f

//private key: 06a4e13b6180baf929314b52e8a52bde173f6f7f

//ts: 1

//hash: 2c50d7a4dc290b8c68573a4ae46682e7

const Principal = (props) => {

    // const [comic, setComic] = useState({
    //     comics: [],
    // });

    const history = useHistory();

    // useEffect(()=>{
        
    //     getComic();
    //     //eslint-disable-next-line
    // },[])

    // const getComic = async () =>{
    //     const comicCollection = await axios.get('https://gateway.marvel.com:443/v1/public/characters/1009610/comics?ts=1&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7');
    //     console.log("que trae?", comicCollection.data.data.results);
    //     //props.dispatch({typer: SHOW, payload: comicCollection.data});

        

    //     setComic({

    //         ...comic, comics: comicCollection.data.data
    //     })
    // }
    //console.log("los comics", comic.comics)
    
    // if(!comic.comics?.results){
    //     return (
    //         <div>
    //             <div className="spinnerContainer">
    //                 <img src={spinner} alt="spinner"/>
    //             </div>
    //         </div>
    //     )
    // }else{
        return(
            <div className="containerPrincipal">
                <div className="headerPrincipal">
                    <h1>COMICFLIX</h1>
                </div>
                {/* <div className="prueba">
                        {comic.comics?.results.map(products=>{
                            return(

                                <div className="prueba1" key={products.id}>
                                    <img src={`${products.thumbnail.path}.${products.thumbnail.extension}`} classname="pruebaImg"/>
                                </div>
                            )
                        })}
                    </div> */}
                <div className="containerLastComic">

                </div>
                <div className="containerCharacter">
                    <div className="getSpiderman">1</div>
                    <div className="getIronman">2</div>
                    <div className="getBlackPanther">3</div>
                    <div className="getDeadpool">4</div>
                    <div className="getCaptainAmerica">5</div>
                    <div className="getThor">6</div>
                    <div className="getHult">7</div>
                    <div className="getAvengers">8</div>

                </div>
            </div>
        
        )
    //}
};

// const mapStateToProps = state => {
//     return{
//         comic: state.comicReducer.comic,
//         user: state.userReducer.user
//     };
// };


export default connect()(Principal)