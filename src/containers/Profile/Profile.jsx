import React, { useEffect, useState} from 'react';
import axios from "axios";
import {connect} from 'react-redux';



const Profile = (props) => {

    const [bought, setBought] = useState({
        listBought : []
    });

    const userId = props.user[0].id

    const bringOrder = async () => {
        let result = await axios.get(`http://127.0.0.1:8000/api/order/${userId}`, { headers: {"Authorization" : `Bearer ${props.user.token}`}});
        console.log("result", result);
        setBought({
            ...bought, listBought: result
        })
    }
    

    useEffect(()=>{

        bringOrder()
    },[])

    return (
        <div className="profileContainer">
            hola mundo

        </div>
    )

}
const mapStateToProps = state => {
    return{
        comic: state.comicReducer.comic,
        user: state.userReducer.user
    };
};
export default connect(mapStateToProps)(Profile);