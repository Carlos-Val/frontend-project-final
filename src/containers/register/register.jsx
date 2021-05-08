import React, {useState} from "react";
import {connect} from 'react-redux';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import imgIronman from '../../assets/img/ironman.jpg';
import imgCapitan from '../../assets/img/capitanamerica.jpg';
import imgBlack from '../../assets/img/blackpanther.jpg';
import imgDead from '../../assets/img/deadpool.jpg';
import imgHulk from '../../assets/img/hulk.jpg';
import imgSpider from '../../assets/img/spiderman.jpg';
import logo from '../../assets/img/logo.png';

import {validateField, validateFields} from '../../tools/error.handlers';
import { Button, FormGroup, Input, FormFeedback } from 'reactstrap';
import Footer from "../../components/Footer/Footer";


const Register = () => {
     
    let history = useHistory();

     //Validación de errores en el formulario
     const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });


    //HOOKS

    const [user, setUser] = useState({
        nickName : "",
        name : "",
        surname1 : "",
        surname2 : "",
        email : "",
        password : "",
        dni : "",
        address : "",
        city : "",
        postalCode : ""
    });


    //Manejador
    const handleState = (event) => {

        //
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });

        let data = { ...user, [event.target.name]: event.target.value };
        setUser(data)
        
    }

    const sendData = async () => {
        let validationResult = validateFields(user);
        

        if(validationResult.address === null && validationResult.city === null && validationResult.dni === null && validationResult.email === null &&
            validationResult.name === undefined && validationResult.nickName === undefined && validationResult.password === null && validationResult.postalCode === null 
            && validationResult.surname1 === undefined && validationResult.surname2 === undefined){
                //Setea el estado de validación
            setValidationResult({
                ...validationResult,
                validated: true
            });

            let result = await axios.post('http://localhost:8000/api/user', user);
            console.log(result, 'esto es result');

            if(result){

                    alert('Usuario Registrado Correctamente');
                    setTimeout(()=>{
                        history.push('/')
                    },1000);
                }
        }else {
                    alert('No se pudo completar el registro');
                }

        
    }

    

    return(
        <div className="viewRegister">
            <div className="leftImg">
                <div className="imgFace">
                    <img className="imgSideFaces" src={imgCapitan} alt="captain"/>
                    <img className="imgSideFaces" src={imgDead} alt="deadpool"/>
                    <img className="imgSideFaces" src={imgBlack} alt="blackpanther"/>
                </div>

            </div>
            <div className="boxRegister">

                <div className="boxLogo">
                    <img className="logoRegister" src={logo} alt="logo"/>
                </div>
                <div className="textRegister">
                    Regístrate!! Y disfruta de los últimos comics del momento!!
                </div>
                <div className='main-container'>
                    <div className='form-container'>
                        <FormGroup>
                            <Input type='text' placeholder='nickName' id='nickName' name='nickName' onChange={handleState} valid={validationResult.validated && !validationResult.nickName} invalid={validationResult.validated && validationResult.nickName} />
                            <FormFeedback>{validationResult.nickName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Nombre' id='name' name='name' onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                            <FormFeedback>{validationResult.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Primer apellido' id='surname1' name='surname1' onChange={handleState} valid={validationResult.validated && !validationResult.surname1} invalid={validationResult.validated && validationResult.surname1} />
                            <FormFeedback>{validationResult.surname1}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Segundo apellido' id='surname2' name='surname2' onChange={handleState} valid={validationResult.validated && !validationResult.surname2} invalid={validationResult.validated && validationResult.surname2} />
                            <FormFeedback>{validationResult.surname2}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Email' id='email' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                            <FormFeedback>{validationResult.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='password' placeholder='Password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                            <FormFeedback>{validationResult.password}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='DNI' id='dni' name='dni' onChange={handleState} valid={validationResult.validated && !validationResult.dni} invalid={validationResult.validated && validationResult.dni} />
                            <FormFeedback>{validationResult.dni}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Dirección' id='address' name='address' onChange={handleState} valid={validationResult.validated && !validationResult.address} invalid={validationResult.validated && validationResult.address} />
                            <FormFeedback>{validationResult.address}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Ciudad' id='city' name='city' onChange={handleState} valid={validationResult.validated && !validationResult.city} invalid={validationResult.validated && validationResult.city} />
                            <FormFeedback>{validationResult.city}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' placeholder='Código Postal' id='postalCode' name='postalCode' onChange={handleState} valid={validationResult.validated && !validationResult.postalCode} invalid={validationResult.validated && validationResult.postalCode} />
                            <FormFeedback>{validationResult.postalCode}</FormFeedback>
                        </FormGroup>
                        <Button classname= 'btnRegister'color='danger' onClick={()=>sendData()}>REGISTRATE</Button>
                        <Button classname= 'btnRegister'color='danger' onClick={()=>setTimeout(()=>{history.push('/')},1000)}>VOLVER</Button>
                    </div>
                </div>
                
            </div> 
                   <div className="rigthImg">
                <div className="imgFace">
                    <img className="imgSideFaces" src={imgHulk} alt="hulk"/>
                    <img className="imgSideFaces" src={imgIronman} alt="ironman"/>
                    <img className="imgSideFaces" src={imgSpider} alt="spiderman"/>
                </div>
            </div>         
            <Footer/>
        </div>

        
    )
  
}
export default connect()(Register);

                