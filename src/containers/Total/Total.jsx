import React from 'react';
import {SAVE} from '../../redux/types/saveComicTypes.js';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';



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

                    </div>

                    <div className="bodyTotal">

                        <div className="imagesTotal">
                            {props.comic.map(picture => 
                                    <div onClick={()=>saveComic(picture)} key={picture.id} className="imgTotal">
                                        <img src={`${picture.thumbnail.path}.${picture.thumbnail.extension}`}/>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }else{
        
        return(
        <div>
            <div className="containerTotal">
                <div className="headerTotal">

                </div>
                
                <div className="bodyTotal">
                    <div className="imagesTotal">
                        
                        {props.comic?.results.map(picture => 
                            <div onClick={()=>saveComic(picture)} key={picture.id} className="imgTotal">
                                <img src={`${picture.thumbnail.path}.${picture.thumbnail.extension}`}/>
                            </div>
                            )}
                    </div>
                </div>
            </div>

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