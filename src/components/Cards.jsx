import { useState } from 'react';




export const Cards =()=> {

    const [number,setNumber]=useState(0);
    const [number2,setNumber2]=useState(0);
    const [number3,setNumber3]=useState(0);
    const [number4,setNumber4]=useState(0);
   
    const [togglePack,setTogglePack]=useState(true);
    const [toggle2,setToggle2]=useState(false);
    const [toggle3,setToggle3]=useState(false);
    const [toggle4,setToggle4]=useState(false);
    const [toggle5,setToggle5]=useState(false);
  
    const rando=()=>{
     setNumber(Math.floor(Math.random() * 102) + 1);
     setTogglePack(false);
     setToggle2(true);
    }
    const rando2=()=>{
      setNumber2(Math.floor(Math.random() * 102) + 1);
     setToggle2(false);
      setToggle3(true);
    
     }
     const rando3=()=>{
      setNumber3(Math.floor(Math.random() * 102) + 1);
      setToggle3(false);
      setToggle4(true);
     
    }
    const rando4=()=>{setToggle4(false);
      setToggle5(true);
      setNumber4(Math.floor(Math.random() * 102) + 1);
      
    }
  
      
   const newPack=()=>{
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setTogglePack(true);
    setNumber(0);
    setNumber2(0);
    setNumber3(0);
    setNumber4(0);
   }


    const card= `https://images.pokemontcg.io/base1/${number}.png`;
    const card2= `https://images.pokemontcg.io/base1/${number2}.png`;
    const card3=`https://images.pokemontcg.io/base1/${number3}.png`;
    const card4=`https://images.pokemontcg.io/base1/${number4}.png`;
  
    const blank=`https://images.pokemontcg.io/base1/0.png`;
  
    return (
      <div className="App">
      
      {togglePack && (
        <img  onClick={rando} src="https://i.pinimg.com/736x/27/40/b1/2740b1875cc332ac702fb42cea612315--french-auction.jpg" alt="thiscard"/>
      )}
         {toggle2 && (
        <img onClick={rando2} src={card} alt="thiscard"/>
      )}
          {toggle3 && (
        <img onClick={rando3} src={card2} alt="thiscard"/>
      )}

{toggle4 && (
        <img onClick={rando4} src={card3} alt="thiscard"/>
      )}
     
{toggle5 && (
        <img  src={card4} alt="thiscard"/>
      )}
      
      
   <div style={{float:"right"}}>
      <img className="tiny" src={card}/>
      <img className="tiny" src={card2}/>
      <img className="tiny" src={card3}/>
      
    
      </div>
   <br/>
   <button onClick={newPack}>New Pack</button>
      
      </div>
  
    );
  }
  
 
  