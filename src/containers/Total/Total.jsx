import React from 'react';
import {SAVE} from '../../redux/types/saveComicTypes.js';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/Footer/Footer.jsx';



const Total = (props) => {

    const history = useHistory();

    const saveComic = (picture) => {

        props.dispatch({type: SAVE, payload: picture});

        setTimeout(() => {history.push('/show-comic')}, 500);
    }

    



    if(!props.comic?.results){
        
        return (
            <div>
            
                <div className="containerTotal">
                    <div className="headerTotal">
                        <Header/>
                    </div>
                    <div className="bodyTotal">
                        <div className="textTotal"> El resultado de la busqueda: </div>
                        <div className="imagesTotal">
                            {props.comic.map(picture => 
                                <div className="generalTotal">
                                    <div onClick={()=>saveComic(picture)} key={picture.id+ "jkd"} className="imageTotal">
                                        <img className="imgTotal" src={`${picture.thumbnail.path}.${picture.thumbnail.extension}`} alt="super"/>
                                    </div>
                                    <div className="titleTotal">{picture.title}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        )
    
    }else{
        
        return(
        <div>
            <div className="containerTotal">
                <div className="headerTotal">
                    <Header/>
                </div>
                
                <div className="bodyTotal">
                <div className="textTotal"> El resultado es: </div>
                    <div className="imagesTotal">
                        {props.comic?.results.map(picture =>
                            <div className="generalTotal">
                                <div onClick={()=>saveComic(picture)} key={picture.id+ "ljk"} className="imageTotal">
                                    <img className="imgTotal"src={`${picture.thumbnail.path}.${picture.thumbnail.extension}`} alt="super"/>
                                </div>
                                <div className="titleTotal">{picture.title}</div>
                            </div>
                            )}
                    </div>
                </div>
                
            </div>
            <Footer/>

        </div>
    )}

}

const mapStateToProps = state => {
    return{
        comic: state.comicReducer.comic,
        count: state.comicReducer.count,
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps)(Total);