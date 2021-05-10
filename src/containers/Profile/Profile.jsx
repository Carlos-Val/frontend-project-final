import React, { useEffect, useState} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import Header from '../../components/header/header';
import imgProfile from '../../assets/img/imagenperfil.jpg';
import { Button, FormGroup, Input, FormFeedback, Label } from 'reactstrap';
import {validateField, validateFields} from '../../tools/error.handlers';
import banner from '../../assets/img/banner2.jpg'
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';




const Profile = (props) => {

    const [bought, setBought] = useState({
        listBought : []
    });

    const userId = props.user[0].id

    const bringOrder = async () => {
        
        let result = await axios.get(`http://127.0.0.1:8000/api/order/${userId}`, { headers: {"Authorization" : `Bearer ${props.user.token}`}});
        setBought({
            ...bought, listBought: result.data
        })
        
    }
    

    useEffect(()=>{

        bringOrder()
    },[])



    

    //Hook para validación
    const [validationResult, setValidationResult] = useState({
       validated: false,
       name: null
    });
    


    //HOOKS

    const [data, setUser] = useState({
        name : props.user[0].name,
        surname1 : props.user[0].surname1,
        surname2 : props.user[0].surname2,
        dni : props.user[0].dni,
        address : props.user[0].address,
        city : props.user[0].city,
        postalCode : props.user[0].postalCode
    });


    //Manejador
    const handleState = (event) => {

        let newData = { ...data, [event.target.name]: event.target.value };
        setUser(newData)
        //
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });

        
        
    }

    const updateUser = async () => {
        let validationResult = validateFields(data);

        //Setea el estado de validación
            setValidationResult({
                ...validationResult,
                validated: true
            });

        try{

            let id = props.user[0].id;
            
            await axios.put(`http://localhost:8000/api/user/${id}`, data, { headers: {"Authorization" : `Bearer ${props.user.token}`} } );
            
            

            return alert('Usuario Modificado Correctamente');

                    
                    
        }catch (error) {
                    alert('No se pudo completar la actualización');
                }

        
    }
    const history = useHistory();

    const saveComic = (picture) => {


        setTimeout(() => {history.push('/read-comic')}, 500);
    }


    
    return (
        
        <div className="profileContainer">
            <div className="headerProfile">
                <Header/>
            </div>
            <div className="containerPhotoForm">
                <div className="photoProfile">
                        <div className="textPhoto">Foto de Perfil</div>
                        <img className="containerChangeImage" src={imgProfile} alt="image"/>
                        <div className="btnChangePhoto">
                            <Button color="danger">Cambiar Foto</Button>
                        </div>
                </div>
                <div className="formProfile">
                    <div className="modifyForm">
                        <FormGroup>
                            <Label for='name'>Nombre:</Label>
                            <Input type='text' placeholder={props.user[0].name} id='name' name='name' onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                            <FormFeedback>{validationResult.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Primer apellido:</Label>
                            <Input type='text' placeholder={props.user[0].surname1} id='surname1' name='surname1' onChange={handleState} valid={validationResult.validated && !validationResult.surname1} invalid={validationResult.validated && validationResult.surname1} />
                            <FormFeedback>{validationResult.surname1}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Segundo apellido:</Label>
                            <Input type='text' placeholder={props.user[0].surname2} id='surname2' name='surname2' onChange={handleState} valid={validationResult.validated && !validationResult.surname2} invalid={validationResult.validated && validationResult.surname2} />
                            <FormFeedback>{validationResult.surname2}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>DNI:</Label>
                            <Input type='text' placeholder={props.user[0].dni} id='dni' name='dni' onChange={handleState} valid={validationResult.validated && !validationResult.dni} invalid={validationResult.validated && validationResult.dni} />
                            <FormFeedback>{validationResult.dni}</FormFeedback>
                        </FormGroup>
                    </div>
                    <div className="modifyForm">
                        <FormGroup>
                            <Label for='name'>Dirección:</Label>
                            <Input type='text' placeholder={props.user[0].address} id='address' name='address' onChange={handleState} valid={validationResult.validated && !validationResult.address} invalid={validationResult.validated && validationResult.address} />
                            <FormFeedback>{validationResult.address}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Ciudad:</Label>
                            <Input type='text' placeholder={props.user[0].city} id='city' name='city' onChange={handleState} valid={validationResult.validated && !validationResult.city} invalid={validationResult.validated && validationResult.city} />
                            <FormFeedback>{validationResult.city}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Codigo Postal:</Label>  
                            <Input type='text' placeholder={props.user[0].postalCode} id='postalCode' name='postalCode' onChange={handleState} valid={validationResult.validated && !validationResult.postalCode} invalid={validationResult.validated && validationResult.postalCode} />
                            <FormFeedback>{validationResult.postalCode}</FormFeedback>
                        </FormGroup>
                        <div className="btnProfileUpdate">
                            <Button color='danger' onClick={() => updateUser()}>UPDATE</Button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="lastPurchases">
                <div className="textLastPurchases">
                    <img className="imgBanner" src={banner} alt="banner"/>
                    <div className="textBanner">AQUI TIENES, {props.user[0].nickName}, TUS ÚLTIMOS COMICS COMPRADOS!!</div>
                </div>
                <div className="textReadComic">
                    PINCHA EN EL COMIC PARA PODER LEERLO ONLINE!!
                </div>
                <div className="containerComicPurchases">
                    {bought.listBought?.map(picture => 
                        <div className="imgComicPurchases">
                            <div onClick={()=>saveComic(picture)} key={picture.id+ "jkd"} className="imageTotal">
                                <img className="imgPurchases" src={picture.imageComic} alt="super"/>
                            </div>
                        </div>
                        )}
                </div>

            </div>
            

            

        </div>
    )

}
const mapStateToProps = state => {
    return{
        // comic: state.comicReducer.comic,
        user: state.userReducer.user
        
    };
};
export default connect(mapStateToProps)(Profile);