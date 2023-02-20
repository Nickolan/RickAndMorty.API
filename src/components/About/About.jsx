import React from "react";
import { Link } from 'react-router-dom'
import style from './About.module.css';

export default function about (){
    return (
        <>
        
        <div className={style.container}>
            <button className={style.homeBotton}>
            <Link className={style.textBotton} to='/home'>Home</Link>
            </button>

            <h1 className={style.titulos} >API DE Nicolas</h1>

            <h2 className={style.titulos}>Cohorte FT-35c</h2>


        </div>

        <div className={style.container2}>

        <img className={style.logoImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
        <p className={style.texto}>Rick&Mort.api es una aplicacion diseñada para permitirle al usuario investigar acerca de los personajes de la popular serie Rick and Morty. 
        Los usuarios puden ingresar a las tarjetas de cada personaje de la serie, y oprimiendo en ellas podra acceder a informacion mas especifica  </p>
        <img className={style.userImg} src="https://i.pinimg.com/originals/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="" />
        <div className={style.userDiv}>
            <h3>Nombre: Nicolas</h3>
            <h3>Edad: 19</h3>
            <h3>Nacion: Argentina</h3>
            <h3>AKA: Nick</h3>
            <h3>Estudia en: SoyHENRY</h3>
        </div>

        </div>

        </>
    )
}