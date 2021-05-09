import axios from 'axios';
import React, { useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import {SEARCH} from '../../redux/types/comicTypes.js';

const SearchBox = (props) => {

    const history = useHistory();

    const [search, setSearch] = useState({
        searchBox: ''
    });

    const stateHandler = (event) => {
        setSearch({...search, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    
    const searchEngine = async () => {
        
        const result = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?title=${search.searchBox}&ts=1&apikey=4ef40f88776b5c1623dbd39d7b611a3f&hash=2c50d7a4dc290b8c68573a4ae46682e7`);
        
        const arraySearch = result.data.data.results.filter(explore => 
            explore.title.toLowerCase().includes(search.searchBox.toLowerCase())
        )
        props.dispatch({type: SEARCH, payload: arraySearch})
        

        setSearch({
            ...search, searchBox: arraySearch
        });

        
        return setTimeout(() => {history.push('/total')},100);
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


export default connect () (SearchBox);

