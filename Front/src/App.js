import './App.css'
import { useEffect, useState } from 'react'
import style from './components/r&m.module.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
// import Error from './components/Error'
// COMPLET ERROR
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App () {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'nicolassantiago.ns@gmail.com';
  const password = '123456'
  const navigate = useNavigate();
  const location = useLocation();

  const login = (userData) =>{
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  const onSearch = (character) => {
    fetch(`http://localhost:3001/onsearch/${character}` )
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(ch => ch.id !== id)
    )
  }

  useEffect(()=>{
    !access && navigate('/');
  },[access]);

  
  return (
    <div className= {`'App' ${style.background}`} style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login = {login}/> : <Nav onSearch = {onSearch} />}
        <Routes>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
          {/* <Route path='*' element={<Error/>} /> */}
        </Routes>
    </div>
  )
}

export default App

