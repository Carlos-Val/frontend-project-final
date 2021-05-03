import React, { useState } from 'react';
import {connect} from 'react-redux';
import {SEARCH} from '../../redux/types/comicTypes.js';

const SearchBox = (props) => {

    const [search, setSearch] = useState({
        searchBox: ''
    });

    const stateHandler = (event) => {
        setSearch({...search, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const searchEngine = () => {
        const arraySearch = props.comic.filter(explore => 
            explore.title.toLowerCase().includes(search.searchBox.toLowerCase())
        )
        console.log(arraySearch);
        props.dispatch({type: SEARCH, payload: arraySearch})

        setSearch({
            ...search, searchBox: arraySearch
        }) 
    }

    const handleOnKeyDown = (event) => {
        if(event.keyCode === 13) searchEngine()
    };

    return (
        <div className="searchContainer">

            <input className="searchBox" type="search" name="searchBox" placeholder="Buscar" onKeyUp={stateHandler} onKeyDown={handleOnKeyDown}/>
            <button type="submit" className="" onClick={()=> searchEngine()}>Buscar</button>

        </div>
    )
}

const mapStateToProps = state=>{
    return{
        comic: state.comicReducer.comic
    }
}

export default connect (mapStateToProps) (SearchBox);

