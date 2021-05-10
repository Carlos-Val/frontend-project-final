import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {validateField, validateFields } from '../../tools/error.handlers';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/userTypes.js';
import imgAlls from '../../assets/img/todos2.jpg';
import { Button } from 'reactstrap';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/img/logo.png';


const Home = (props) => {

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    const history = useHistory();

     //Hook para el estado del Login
     const [dataLogin, setLogin] = useState({
        nickName: '',
        password: ''
    })

    //Handlers
    const handleState = (event) => {
        setValidationResult({ ...validationResult, [event.target.name]: validateField(event.target.value)
        });
        setLogin({...dataLogin, [event.target.name]: event.target.value});

        //
        // setValidationResult({
        //     //
        //     ...validationResult,
        //     //
        //     [event.target.name]: validateField(event.target.name, event.target.value)
        // });
    };

    const login = async () => {

        let validationResult = validateFields(dataLogin);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });

        // if(!isValid(validationResult)){
        //     return;

        // }
        let body ={
            nickName: dataLogin.nickName,
            password: dataLogin.password
        }
        let result = await axios.post('http://127.0.0.1:8000/api/user/login', body);
        console.log(result, "result home")
        props.dispatch({type: LOGIN, payload: result.data[0]})

        if(result.data.error){
            alert('Nombre de usuario o contraseña incorrectos');
            
        } else {
            alert('Usuario logueado con éxito');
            setTimeout(() => {
                history.push('/principal');
            }, 500)
        }


        // try {
        //     let result = await axios.post('http://127.0.0.1:8000/api/user/login', dataLogin);
               
        //     props.dispatch({type: LOGIN, payload: result.data});

        //     return history.push('/principal');
                                
        // } catch (error) {
        //     if(error.isAxiosError & error.response?.status === 403){
        //         alert('El usuario no existe');  
        //     }
        // }
    };

    const redirect = () => {
        return setTimeout(() => {
        history.push('/register')
        }, 1000);
    }



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
                            <Input type="text" placeholder="Nickname" maxLength="18" name="nickName" onChange={handleState} valid={validationResult.validated && !validationResult.nickName} invalid={validationResult.validated && validationResult.nickName}/>
                            <Input type="password" placeholder="Password" name="password" onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password}/>
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
                    {/* <div className="menssageError">{message}</div> */}

                </div>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default connect()(Home);


// let history = useHistory();

  

//     const [dataLogin, setLogin] = useState({
//         nickName : "",
//         password : ""
//     });

//     const [message, setMessage] = useState("");


//     //USEeFFECTS
//     useEffect(()=>{

//     },[]);

//     //HANDLERS
//     const handleState = (ev) => {
//         setLogin({...dataLogin,[ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
//     }


    
//     const login = async () => {

//         //COMPROBACION DE ERRORES
//         setMessage("");

//         let messageError = checkError(dataLogin);

//         setMessage(messageError);

//         if(messageError){
//             return;
//         };

//         //LO QUE ENVIAMOS AL BACKEND

//         let body = {
//             nickName : dataLogin.nickName,
//             password : dataLogin.password
//         }
//         let endPointUser = 'http://127.0.0.1:8000/api/user/login';
        
//         let result = await axios.post(endPointUser, body);

//         props.dispatch({type: LOGIN, payload: result.data});


//         if(!result.data.jwt?.error){
//             setTimeout(()=>{
//                 history.push('/principal');
//             },500);
//         }else{
//             setMessage(result.data.jwt?.error);
//             alert('Nombre de usuario o contraseña incorrectos');
//         }
//     };