import React, { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import checkError from '../../tools/error.handlers';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/userTypes.js';
import imgAlls from '../../assets/img/todos2.jpg';
import { Button } from 'reactstrap';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/img/logo.png';


const Home = (props) => {

    let history = useHistory();

    const [dataLogin, setLogin] = useState({
        nickName : "",
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

    const redirect = () => {
        return setTimeout(() => {
          history.push('/register')
        }, 1000);
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
            nickName : dataLogin.nickName,
            password : dataLogin.password
        }
        let endPointUser = 'http://127.0.0.1:8000/api/user/login';
        
        let result = await axios.post(endPointUser, body);
        props.dispatch({type: LOGIN, payload: result.data});


        if(!result.data.jwt?.error){
            setTimeout(()=>{
                history.push('/principal');
            },500);
        }else{
            setMessage(result.data.jwt?.error);
        }
    };


    return (
        <div>
            <div className='homeContainer'>
                
                
                <div className="imageContainer">
                    <div className="imagePrincipal">
                        <img className="imgComics"src={imgAlls} alt="todos"/>
                    </div>
                </div>
                <div className="textForRegisterContainer">

                    <div className="formLogin">
                        <div className="containerLogoHome">
                            <img className="logoHome" src={logo} alt="logo"/>
                        </div>
                        <div className="containerInputHome">
                            <Input type="text" placeholder="Nickname" maxLength="10" name="nickName" onChange={handleState}/>
                            <Input type="password" placeholder="Password" name="password" onChange={handleState}/>
                        </div>
                        <div className="containerBtnHome">
                            <div className="btnHomeLogin">
                                <Button color="dark" onClick={()=> login()}>Login</Button>{' '}
                            </div>
                            <div className="btnHomeRegister">
                                <Button color="dark" onClick={()=> redirect()}>Regístrate</Button>{' '}   
                            </div>
                        </div>

                    </div>
                    <div className="menssageError">{message}</div>

                </div>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default connect()(Home);