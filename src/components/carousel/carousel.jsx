import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { SAVE } from '../../redux/types/saveComicTypes';
import { SHOWCOUNT } from '../../redux/types/comicTypes';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar, Zoom } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/zoom/zoom.scss';


const Carousel = (props) => {
    console.log("props carousel", props)    
    const history = useHistory();

    const [list, setList] = useState({
        lists: []
    });
    
    
    useEffect(() => {

        getList();
    
    },[])


    const getList = async () => {
        const listLastCollection = await axios.get('https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=thisWeek&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7');
        
        props.dispatch({type: SHOWCOUNT, payload: listLastCollection.data.data});

        setList({

            ...list, lists: listLastCollection.data.data
        })
        
    }
    

    SwiperCore.use([Navigation, Pagination, EffectFade, Scrollbar, A11y, Zoom])
    

    const saveComic = (picture) => {

        props.dispatch({type: SAVE, payload: picture});

        setTimeout(() => {history.push('/show-comic')}, 100);

        
        
    }
    if(props.count?.results){
        return (
            
            <div className="mainCarousel">
                <div className="titleCarousel">Películas de Aventuras</div>                
                <div className="carouselAdventure">                     
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={7}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            {props.count?.results.map(picture => 
                                <SwiperSlide>
                                    <div onClick={()=> saveComic(picture)} className="swiper-slide">               
                                        <img src={`${picture.thumbnail.path}.${picture.thumbnail.extension}`}/>
                                    </div>  
                                </SwiperSlide>
                            )}
                    </Swiper>
                </div>
            </div>
        );
    }else{
        return(
            <div>
                hoila
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        count: state.comicReducer.count,
        user: state.userReducer.user
        
    };
};

export default connect (mapStateToProps)(Carousel)

