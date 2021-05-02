import React from 'react';
import {connect} from 'react-redux';
import { SAVE } from '../../redux/types/saveComicTypes';
import { useHistory } from 'react-router-dom';

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
                hola
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

