import { useState, useEffect } from 'react';
import './App.css';
import pokemon from 'pokemontcgsdk';
import {pokeCard} from "../src/utils/consts"
pokemon.configure({apiKey: 'ee65b96f-867a-4a73-95e0-5274015cacc1'})

function App() {
  const [card,setCard]=useState();
  const [number,setNumber]=useState(69);
  

  const rando=()=>{
   
    setNumber(Math.floor(Math.random() * 102) + 1);
    console.log(number);
    
  }


  useEffect(() => {
  const fetchCard = async () => {
    fetch(`${pokeCard}/cards/base1-${number}`)
    .then(r=> r.json())
  .then(data => {
      setCard(data.data.images.small);
  
  })
};
fetchCard();
  },[])



  return (
    <div className="App">
    <h2>Pokemon TCG Open Packs</h2>
    To click the card and get a new card,
    eventually making it drastically more advanced

    <br/>
    <img onClick={rando} src={card} alt="thiscard"/>
    
    </div>

  );
}

export default App;
