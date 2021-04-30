import React from 'react';
import axios from "axios";
import {connect} from 'react-redux';



const Profile = (props) => {


    const bringOrder = async () => {
        let result = await axios.get(`http://127.0.0.1:8000/api/order/${props.user?.id}`, { headers: {"Authorization" : `Bearer ${props.user.token}`}});
    }

    return (
        <div className="profileContainer">
            
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