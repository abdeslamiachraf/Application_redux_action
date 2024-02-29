import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLivres, addPanier, remPanier } from './actions/action'




function App() {
    const [data, setData]=useState()
    const dispatch =useDispatch()

      
   
    const [cat, setCat]=useState("")
   
    const livres = useSelector(data=>cat==""?data.livres:data.livres.filter((livre)=>livre.Genre==cat))

    const items = useSelector(data=>data.panier)
    useEffect(() => {
        fetch("http://localhost:3001/livres")
          .then((res) => res.json())
          .then((res)=>dispatch(setLivres(res)))
                
          }, []);
  return (
    <>
       
        <div className='container'>
        <select value={cat} onChange={e=>setCat(e.target.value)}>
            <option value={""}>select a category</option>
            <option value={"Science Fiction"}>Science Fiction</option>
            <option value={"Romance"}>Romance</option>
            <option value={"Classics"}>Classics</option>
        </select>
        <table className='table '>
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {livres.map((livre,index)=>{
                    return(<tr key={index}>
                        <td>{livre.ISBN}</td>
                        <td>{livre.Titre}</td>
                        <td>{livre.Auteur}</td>
                        <td>{livre.Prix}</td>
                        <td><button className='btn btn-success' onClick={()=>dispatch(addPanier(livre))}>Ajouter</button></td>
                    </tr>)
                })}
            </tbody>

        </table>
        <div className='container'>
        <h1 >Panier:</h1>
        <ol>
            {items.map((item,index)=>{
                return(<li key={index}>
                    nom: {item.Titre}, Auteur: {item.Auteur}, Prix: {item.Prix}
                    <button className='btn btn-warning' onClick={()=>dispatch(remPanier(item.ISBN))}>Supprimer</button>
                </li>)
            })}
        </ol>
    </div>
    <div className='container'>
        <h1 >Total:</h1>
        <h2>{items.map((item)=>item.Prix).reduce((a,b)=>a+b,0)}</h2>
    </div>
    </div>

    </>
  )
}

export default App