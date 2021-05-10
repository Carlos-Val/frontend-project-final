//FUNCIONES ÚTILES Y MISCELANEA.

 const checkError = (datosCheck) => {
  
     for(let field in datosCheck){
         switch(field) {
            case 'nickName' :
             
                // eslint-disable-next-line
                if(! /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/.test(datosCheck[field]) ){
                 
                    return "El nickName introducido no es valido";
                }
        
            break;
            
            case 'email' :
             
                // eslint-disable-next-line
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field]) ){
                 
                    return "El email introducido no es correcto";
                }
        
            break;
            case 'password' :
                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(datosCheck[field])){
                    return "El password no es correcto";
                }
             
            break;
          
            default: 
            break;
         }
     }
 };
 export default checkError;

const notEmptyOrWhitespace = (inputValue) => {
    return /^\s*$/.test(inputValue) ? 'Campo vacio' : null;
};

const onlyLettersNumbers = (inputValue) => {
    if(! /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/.test(inputValue)){
        return 'El campo sólo puede contener letras y números';
    };
};
const onlyLetters = (inputValue) => {
    if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputValue)){
        return 'El campo sólo puede contener letras';
    };
};

const isEmail = (inputValue) => {
    // eslint-disable-next-line
    if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(inputValue) ){
        return 'El email introducido no es correcto';
    }
}
const isPassword = (inputValue) => {
    if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(inputValue)){
        return 'La contraseña debe contener al menos 8 caracteres, mayúscula, minúscula, números y algún caracter especial.';
    }
}

const isDni = (inputValue) => {
    if(! /^[0-9]{8,8}[A-Za-z]$/.test(inputValue)){
        return 'El número introducido no tiene el formato de un DNI.'
    }
} 

const isAddress = (inputValue) => {
    if(! /^[A-Za-z0-9'\-\s]/.test(inputValue)){
        return 'La dirección introducida no es correcta.'
    }
}

const isCodePostal = (inputValue) => {
    if(! /^[0-9]{5,5}/.test(inputValue)){
        return 'Este campo solo puede llevar números.'
    }
} 

const validateField = (inputName, inputValue) => {
    //
    switch (inputName) {
        case 'nickName':
            return onlyLettersNumbers(inputValue);
        case 'name':
            return onlyLetters(inputValue);
        case 'surname1':
            return onlyLetters(inputValue);
        case 'surname2':
            return onlyLetters(inputValue);
        case 'email':
            return isEmail(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'password':
            return isPassword(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'dni':
            return isDni(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'address':
            return isAddress(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'city':
            return onlyLetters(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'postalCode':
            return isCodePostal(inputValue) || notEmptyOrWhitespace(inputValue);
        
        default:
            return null;
    }
};

//Devuelve un objeto donde cada propiedad es el campo del formulario y su valor, es su mensaje de error si lo hubiese.
const validateFields = (datosCheck) => {
    let results = {};

    //
    for (let field in datosCheck) {
        //
        results[field] = validateField(field, datosCheck[field]);
    }

    return results;
};

export {validateField,validateFields};