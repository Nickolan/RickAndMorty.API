import React from "react"
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import DetStyle from './Detail.module.css';


export default function Detail (){
    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return (
    <div className={DetStyle.container}>
        <hr style={{display: 'none'}} />
        <button className={DetStyle.backButton}>
            <Link className={DetStyle.backText} to='/home'>Back</Link>
        </button>
      <div className={DetStyle.divText}>
        <h1>DETAIL CHARACTER</h1>
        <h2>Nombre: {character?.name}</h2>
        <p>Status: {character?.status}</p>
        <p>Especie: {character?.species}</p>
        <p>Genero: {character?.gender}</p>
        <p>Origin: {character?.origin?.name}</p>
      </div>
        <img className={DetStyle.img} src={character?.image} />
    </div>
    )
}