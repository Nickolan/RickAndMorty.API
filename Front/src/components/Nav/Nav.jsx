import SearchBar from '../SearchBar'
import React from 'react'
import StyleNav from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }){
  
    return (
      <nav className={StyleNav.container}>
        <div className={StyleNav.links}>
        <Link className={StyleNav.link} to='/home'>
          <span>Home</span>
        </Link>
        <Link className={StyleNav.link}  to="/about" >
          <span>About</span>
        </Link>
        <Link className={StyleNav.link} to='/'>
        <span>Form</span>
        </Link>
        <Link className={StyleNav.link} to='/favorites'>
          <span>MyFavorites</span>
        </Link>
        </div>
        
        <SearchBar onSearch = {onSearch}/>
      </nav>
      
    )
}