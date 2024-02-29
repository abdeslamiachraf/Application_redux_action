import React, { useState } from 'react'
/* import 'bootstrap/dist/css/bootstrap.min.css'
 */import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Detail() {
  const livres = useSelector(data=>data.livres)
  console.log(livres)

  return (<>
  <h1>livre details</h1>
        <ul>
        {livres.map((livre,index)=>{
          return (<li key={index}>{livre.ISBN} {livre.Titre} {livre.Auteur}{livre.Prix}{livre.Genre}</li>);
        })}
  </ul>
  </>)
}

export default Detail