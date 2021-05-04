import React, {useState, useEffect} from "react";
import checkError from '../../tools/error.handlers';
import Input from '../../components/input/input';
import {connect} from 'react-redux';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import imgIronman from '../../assets/img/ironman.jpg';
import imgCapitan from '../../assets/img/capitanamerica.jpg';
import imgBlack from '../../assets/img/blackpanther.jpg';
import imgDead from '../../assets/img/deadpool.jpg';
import imgHulk from '../../assets/img/hulk.jpg';
import imgSpider from '../../assets/img/spiderman.jpg';
import logo from '../../assets/img/logo.jpg';


const Register = (props) => {
     
    let history = useHistory();


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

    const [message, setMessage] = useState("");

    //Manejador de estado

    const handleState = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    };

    //Enviar datos del registro
    const sendData = async () => {
        //Comprobación de errores
        setMessage("");

        let messageError = checkError(user);

        setMessage(messageError);

        if(messageError){
            return;
        };

        //Body a enviar al backend

        let body ={
            nickName : user.nickName,
            name : user.name,
            surname1 : user.surname1,
            surname2 : user.surname2,
            email : user.email,
            password : user.password,
            dni : user.dni,
            address : user.address,
            city : user.city,
            postalCode : user.postalCode
        };

        let endPointUser = 'http://localhost:8000/api/user';

        let result = await axios.post(endPointUser, body);
        console.log("el result",result);
        if(result){
            alert('Usuario Registrado Correctamente');
            setTimeout(()=>{
                history.push('/')
            },1000);
        }else {
            alert('No se pudo completar el registro, vuelve a intentarlo en otro momento');
        }

    };

    //RETURN

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
                <div className="boxForm">
                    <Input title="Nickname" placeholder="Nickname" type="text" maxLength="15" name="nickName" onChange={handleState}/>
                    <Input title="Nombre" placeholder="Nombre" type="text" maxLength="15" name="name" onChange={handleState}/>
                    <Input title="Primer Apellido" placeholder="Primer Apellido" type="text" maxLength="15" name="surname1" onChange={handleState}/>
                    <Input title="Segundo Apellido" placeholder="Segundo Apellido" type="text" maxLength="15" name="surname2" onChange={handleState}/>
                    <Input title="Email" placeholder="Email" type="text" maxLength="20" name="email" onChange={handleState}/>
                    <Input title="Password" placeholder="Password" type="password" maxLength="15" name="password" onChange={handleState}/>
                    <Input title="DNI" placeholder="DNI" type="text" maxLength="10" name="dni" onChange={handleState}/>
                    <Input title="Dirección" placeholder="Dirección" type="text" maxLength="30" name="address" onChange={handleState}/>
                    <Input title="Ciudad" placeholder="Ciudad" type="text" maxLength="15" name="city" onChange={handleState}/>
                    <Input title="Código Postal" placeholder="Código Postal" type="text" maxLength="8" name="postalCode" onChange={handleState}/>
                    <button id="buttonRegister" onClick={()=> sendData()}>Enviar</button>
                    <div className="menssageError">{message}</div>
                </div>
            </div>  
            <div className="rigthImg">
                <div className="imgFace">
                    <img className="imgSideFaces" src={imgHulk} alt="hulk"/>
                    <img className="imgSideFaces" src={imgIronman} alt="ironman"/>
                    <img className="imgSideFaces" src={imgSpider} alt="spiderman"/>
                </div>
            </div>         

        </div>
    )
  
}
export default connect()(Register);