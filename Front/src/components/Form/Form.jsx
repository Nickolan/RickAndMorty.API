import React from "react";
import StyleForm from './Form.module.css';
import { useState } from "react";
import { validate } from './validation.js'

export default function Form({ login }) {
    
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    function handleInputChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value,
            })
        );
        
    };

    function handleSubmit(event){
        event.preventDefault();
        login(userData)
    }
    return(
        <form onSubmit={handleSubmit} className={StyleForm.forms}>
            <div>
            <label htmlFor="username" className={StyleForm.labeles}>Username: </label>
            <input className={StyleForm.inputs} value={userData.username} onChange={handleInputChange} type='text' placeholder="User" name="username"></input>
            <p>{errors.username}</p>
            </div>
            
            <div>
            <label htmlFor="password" className={StyleForm.labeles}>Password: </label>
            <input className={StyleForm.inputs} value={userData.password} onChange={handleInputChange} type='password' placeholder="password" name='password'></input>
            <p>{errors.password}</p>
            </div>
            

            <button className={StyleForm.button} type="submit">Login</button>
        </form>
       
    )
}