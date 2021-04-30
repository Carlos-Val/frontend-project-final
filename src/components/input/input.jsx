import React from 'react';


const Input=(props)=>{
    return(
        <div>
            <p className="titleInput">{props.title}</p>
            <input className='input' type={props.type} placeholder={props.placeholder} maxLength={props.maxLength} name={props.name}  onChange={props.onChange}/>
        </div>
    )
}

export default Input