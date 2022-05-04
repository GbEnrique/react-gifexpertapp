import React, { useState } from 'react'
import AppCategory from './components/AppCategory';
import GifGrid from './components/GifGrid';


// const categories = ['One punch','Samurai X', 'Dragon Ball']
const GifExpertApp = () => {
    const [categories,setCategories]=useState(['One punch' ]);

    // const handleAdd=()=>{
    //     setCategories((c=>[...c,'HunterXHunter']));
    // }
  return (
    <>
       <h2>GifExpertApp</h2>
       <AppCategory setCategories={setCategories}/>
      <hr/>
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
      {
          categories.map(categorie=>(
            // <li key={categorie}>{categorie}</li>
            <GifGrid 
            key={categorie}
            category={categorie}/>
          ) 
               
          )
      }</ol>
    </>
  )
}

export default GifExpertApp

