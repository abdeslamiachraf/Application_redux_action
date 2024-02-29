import React from 'react'

 import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='box'>
        <h1>Bibliothéque</h1>
        <ul>
            <li><Link to={"/acceuil"}>Acceuil</Link></li>
            <li><Link to={"/detail"}>Detail</Link></li>
        </ul>


    </div>
  )
}

export default Header