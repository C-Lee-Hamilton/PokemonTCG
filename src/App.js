import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [number,setNumber]=useState(1);
  
  const rando=()=>{
   setNumber(Math.floor(Math.random() * 102) + 1);
    console.log(number);
  }
  const card= `https://images.pokemontcg.io/base1/${number}.png`;

  return (
    <div className="App">
    
      <h2>Pokemon TCG Open Packs</h2>
        Welp, I didnt need the API to do what I wanted, so this is scrapped as an API project, 
        but I still plan to do my original app
      <br/>
      <img onClick={rando} src={card} alt="thiscard"/>
    
    </div>

  );
}

export default App;
