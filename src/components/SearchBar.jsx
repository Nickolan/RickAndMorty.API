import style from './r&m.module.css';
import { useState } from 'react';


export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div >
      <input className={style.barraBusqueda} type='search' value={character} onChange = {handleChange}/>
      <button className={style.botonBusqueda} onClick = {() => onSearch(character)}>Agregar</button>
      </div>
   );
}
