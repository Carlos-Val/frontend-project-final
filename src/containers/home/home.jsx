import React, { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import checkError from '../../tools/error.handlers';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/userTypes.js';
import imgAlls from '../../assets/img/todos2.jpg';





const Home = (props) => {

    let history = useHistory();

    const [dataLogin, setLogin] = useState({
        userName : "",
        password : ""
    });

    const [message, setMessage] = useState("");

    //USEeFFECTS
    useEffect(()=>{

    },[]);

    //HANDLERS
    const handleState = (ev) => {
        setLogin({...dataLogin,[ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
    }

    

    const login = async () => {

        //COMPROBACION DE ERRORES
        setMessage("");

        let messageError = checkError(dataLogin);

        setMessage(messageError);

        if(messageError){
            return;
        };

        //LO QUE ENVIAMOS AL BACKEND

        let body = {
            userName : dataLogin.userName,
            password : dataLogin.password
        }

        let result = await axios.post('http://127.0.0.1:8000/api/user/login', body);

        props.dispatch({type: LOGIN, payload: result.data});


        if(!result.data.jwt?.error){
            setTimeout(()=>{
                history.pushState('/profile');
            },1000);
        }else{
            setMessage(result.data.jwt?.error);
        }
    };


    return (
        <div className='homeContainer'>
            <div className="imageContainer">
                <div className="imagePrincipal">
                    <img className="imgComics"src={imgAlls} alt="todos"/>
                </div>
            </div>
            <div className="textForRegisterContainer">
                <div className="formLogin">
                    <Input title="UserName" type="text" placeholder="Username" maxLength="10" name="userName" onChange={handleState}/>
                    <Input title="Password" type="password" placeholder="Password" name="password" onChange={handleState}/>
                    <button id="buttonLogin" onClick={()=> login()}>Login</button>
                    <div className="mensajeError">{message}</div>

                </div>
                
                
            </div>


        </div>
    )
}

export default connect()(Home);