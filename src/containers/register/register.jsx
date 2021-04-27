import React, {useState, useEffect} from "react";
import checkError from '../../tools/error.handlers';
import Input from '../../components/input/input';
import {connect} from 'react-redux';
import axios from "axios";
import {useHistory} from 'react-router-dom';



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
        adress : "",
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
            adress : user.adress,
            city : user.city,
            postalCode : user.postalCode
        };

        let endPointUser = 'http://localhost:8000/api/user';

        let result = await axios.post(endPointUser, body);

        if(result){
            alert('Usuario Registrado Correctamente');
            setTimeout(()=>{
                history.push('/profile')
            },1000);
        }else {
            alert('No se pudo completar el registro, vuelve a intentarlo en otro momento');
        }

    };

    //RETURN

    return(
        <div className="viewRegister">
            <Input title="Nickname" placeholder="Nickname" type="text" maxLength="15" name="nickName" onChange={handleState}/>
            <Input title="Nombre" placeholder="Nombre" type="text" maxLength="15" name="name" onChange={handleState}/>
            <Input title="Primer Apellido" placeholder="Primer Apellido" type="text" maxLength="15" name="surname1" onChange={handleState}/>
            <Input title="Segundo Apellido" placeholder="Segundo Apellido" type="text" maxLength="15" name="surname2" onChange={handleState}/>
            <Input title="Email" placeholder="Email" type="text" maxLength="20" name="email" onChange={handleState}/>
            <Input title="Password" placeholder="Password" type="text" maxLength="15" name="password" onChange={handleState}/>
            <Input title="DNI" placeholder="DNI" type="text" maxLength="10" name="dni" onChange={handleState}/>
            <Input title="Dirección" placeholder="Dirección" type="text" maxLength="30" name="adress" onChange={handleState}/>
            <Input title="Ciudad" placeholder="Ciudad" type="text" maxLength="15" name="city" onChange={handleState}/>
            <Input title="Código Postal" placeholder="Código Postal" type="text" maxLength="8" name="postalCode" onChange={handleState}/>
            <button id="buttonRegister" onClick={()=> sendData()}>Enviar</button>
                       

        </div>
    )
  
}
export default connect()(Register);