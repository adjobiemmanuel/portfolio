import React from 'react'
import Data from '../data/data.json'
import Card from '../features/Card'

function Projet() {
  
  return (
    <div style={{padding:"1em"}}>
       {Data.projet.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
    </div>
  )
}

export default Projet
