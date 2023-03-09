import { useState } from 'react';
import '../App.css';


export const Cards =()=> {
//useStates
    const [number,setNumber]=useState(0);
    const [number2,setNumber2]=useState(0);
    const [number3,setNumber3]=useState(0);
    const [number4,setNumber4]=useState(0);
    const [number5,setNumber5]=useState(0);
    const [number6,setNumber6]=useState(0);
    const [number7,setNumber7]=useState(0);
    const [number8,setNumber8]=useState(0);
    const [number9,setNumber9]=useState(0);
    const [number10,setNumber10]=useState(0);
    const [number11,setNumber11]=useState(0);
    const [number12,setNumber12]=useState(0)
    const [mini1,setMini1]=useState(0);
    const [mini2,setMini2]=useState(0);
    const [mini3,setMini3]=useState(0);
    const [mini4,setMini4]=useState(0);
    const [mini5,setMini5]=useState(0);
    const [mini6,setMini6]=useState(0);
    const [mini7,setMini7]=useState(0);
    const [mini8,setMini8]=useState(0);
    const [mini9,setMini9]=useState(0);
    const [mini10,setMini10]=useState(0);
    const [mini11,setMini11]=useState(0);
    const [togglePack,setTogglePack]=useState(true);
    const [toggle2,setToggle2]=useState(false);
    const [toggle3,setToggle3]=useState(false);
    const [toggle4,setToggle4]=useState(false);
    const [toggle5,setToggle5]=useState(false);
    const [toggle6,setToggle6]=useState(false);
    const [toggle7,setToggle7]=useState(false);
    const [toggle8,setToggle8]=useState(false);
    const [toggle9,setToggle9]=useState(false);
    const [toggle10,setToggle10]=useState(false);
    const [toggle11,setToggle11]=useState(false);
    const [toggle12,setToggle12]=useState(false);

//onClick Functions
    const rando=()=>{
     setNumber(Math.floor(Math.random() * 102) + 1);
     setTogglePack(false);
     setToggle2(true);
    }
    const rando2=()=>{
      setNumber2(Math.floor(Math.random() * 102) + 1);
      setToggle2(false);
      setToggle3(true);
      setMini1(number);
     }
     const rando3=()=>{
      setNumber3(Math.floor(Math.random() * 102) + 1);
      setToggle3(false);
      setToggle4(true);
      setMini2(number2);
    }
    const rando4=()=>{
      setNumber4(Math.floor(Math.random() * 102) + 1);
      setToggle4(false);
      setToggle5(true);
      setMini3(number3);
    }
    const rando5=()=>{
      setNumber5(Math.floor(Math.random() * 102) + 1);
      setToggle5(false);
      setToggle6(true);
      setMini4(number4);
    }
    const rando6=()=>{
      setNumber6(Math.floor(Math.random() * 102) + 1);
      setToggle6(false);
      setToggle7(true);
      setMini5(number5);  
    }
    const rando7=()=>{
      setNumber7(Math.floor(Math.random() * 102) + 1);
      setToggle7(false);
      setToggle8(true);
      setMini6(number6); 
    }
    const rando8=()=>{
      setNumber8(Math.floor(Math.random() * 102) + 1);
      setToggle8(false);
      setToggle9(true);
      setMini7(number7);
     }
    const rando9=()=>{
      setNumber9(Math.floor(Math.random() * 102) + 1);
      setToggle9(false);
      setToggle10(true);
      setMini8(number8);
     }
    const rando10=()=>{
      setNumber10(Math.floor(Math.random() * 102) + 1);
      setToggle10(false);
      setToggle11(true);
      setMini9(number9);
     }
    const rando11=()=>{
      setNumber11(Math.floor(Math.random() * 102) + 1);
      setToggle11(false);
      setToggle12(true);
      setMini10(number10);
     }
    const rando12=()=>{
      setMini11(number11);
      setNumber12(number11);
    }

//button onClick    
    const newPack=()=>{
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
    setToggle7(false);
    setToggle8(false);
    setToggle9(false);
    setToggle10(false);
    setToggle11(false);
    setToggle12(false);
    setTogglePack(true);
    setNumber(0);
    setNumber2(0);
    setNumber3(0);
    setNumber4(0);
    setNumber5(0);
    setNumber6(0);
    setNumber7(0);
    setNumber8(0);
    setNumber9(0);
    setNumber10(0);
    setNumber11(0);
    setNumber12(0);
    setMini1(0);
    setMini2(0);
    setMini3(0);
    setMini4(0);
    setMini5(0);
    setMini6(0);
    setMini7(0);
    setMini8(0);
    setMini9(0);
    setMini10(0);
    setMini11(0);
    }

//Image Sources
    const card= `https://images.pokemontcg.io/base1/${number}.png`;
    const card2= `https://images.pokemontcg.io/base1/${number2}.png`;
    const card3=`https://images.pokemontcg.io/base1/${number3}.png`;
    const card4=`https://images.pokemontcg.io/base1/${number4}.png`;
    const card5= `https://images.pokemontcg.io/base1/${number5}.png`;
    const card6= `https://images.pokemontcg.io/base1/${number6}.png`;
    const card7= `https://images.pokemontcg.io/base1/${number7}.png`;
    const card8= `https://images.pokemontcg.io/base1/${number8}.png`;
    const card9= `https://images.pokemontcg.io/base1/${number9}.png`;
    const card10= `https://images.pokemontcg.io/base1/${number10}.png`;
    const card11= `https://images.pokemontcg.io/base1/${number11}.png`;
    const minicard= `https://images.pokemontcg.io/base1/${mini1}.png`;
    const minicard2= `https://images.pokemontcg.io/base1/${mini2}.png`;
    const minicard3= `https://images.pokemontcg.io/base1/${mini3}.png`;
    const minicard4= `https://images.pokemontcg.io/base1/${mini4}.png`;
    const minicard5= `https://images.pokemontcg.io/base1/${mini5}.png`;
    const minicard6= `https://images.pokemontcg.io/base1/${mini6}.png`;
    const minicard7= `https://images.pokemontcg.io/base1/${mini7}.png`;
    const minicard8= `https://images.pokemontcg.io/base1/${mini8}.png`;
    const minicard9= `https://images.pokemontcg.io/base1/${mini9}.png`;
    const minicard10= `https://images.pokemontcg.io/base1/${mini10}.png`;
    const minicard11= `https://images.pokemontcg.io/base1/${mini11}.png`;

    
  
    return (
      <div className="App">
      
    {togglePack && (
        <img  style={{float:"left"}}onClick={rando} src="https://i.pinimg.com/736x/27/40/b1/2740b1875cc332ac702fb42cea612315--french-auction.jpg" alt="thiscard"/>
      )}

    {toggle2 && (
        <img style={{float:"left"}} onClick={rando2} src={card} alt="thiscard"/>
      )}

    {toggle3 && (
        <img style={{float:"left"}} onClick={rando3} src={card2} alt="thiscard"/>
      )}

    {toggle4 && (
        <img style={{float:"left"}} onClick={rando4} src={card3} alt="thiscard"/>
      )}
     
    {toggle5 && (
        <img style={{float:"left"}} onClick={rando5} src={card4} alt="thiscard"/>
      )}
    {toggle6 && (
        <img style={{float:"left"}} onClick={rando6} src={card5} alt="thiscard"/>
      )}
    {toggle7 && (
        <img style={{float:"left"}} onClick={rando7} src={card6} alt="thiscard"/>
      )}

    {toggle8 && (
        <img style={{float:"left"}} onClick={rando8} src={card7} alt="thiscard"/>
      )}
     
    {toggle9 && (
        <img style={{float:"left"}}onClick={rando9} src={card8} alt="thiscard"/>
      )}

    {toggle10 && (
        <img style={{float:"left"}} onClick={rando10} src={card9} alt="thiscard"/>
      )}

    {toggle11 && (
        <img style={{float:"left"}} onClick={rando11} src={card10} alt="thiscard"/>
      )}
     
    {toggle12 && (
        <img style={{float:"left"}} onClick={rando12} src={card11} alt="thiscard"/>
      )}
     
   <div style={{ float:"left"}}>

      <img onClick={() => setNumber11(number)} className="tiny" src={minicard} alt="thiscard"/>
      <img onClick={() => setNumber11(number2)} className="tiny" src={minicard2} alt="thiscard"/>
      <img onClick={() => setNumber11(number3)} className="tiny" src={minicard3} alt="thiscard"/>
      <br/>
      <img onClick={() => setNumber11(number4)} className="tiny" src={minicard4} alt="thiscard"/>
      <img onClick={() => setNumber11(number5)} className="tiny" src={minicard5} alt="thiscard"/>
      <img onClick={() => setNumber11(number6)} className="tiny" src={minicard6} alt="thiscard"/>
      <br/>
      <img onClick={() => setNumber11(number7)} className="tiny" src={minicard7} alt="thiscard"/>
      <img onClick={() => setNumber11(number8)} className="tiny" src={minicard8} alt="thiscard"/>
      <img onClick={() => setNumber11(number9)} className="tiny" src={minicard9} alt="thiscard"/>
      <br/>
      <img onClick={() => setNumber11(number10)} className="tiny" src={minicard10} alt="thiscard"/>
      <img onClick={() => setNumber11(number12)} style={{marginLeft:"33%"}} className="tiny" src={minicard11} alt="thiscard"/>
    
    </div>

      <button style={{marginRight:"100%"}} onClick={newPack}>New Pack</button>
      <br/>
      <br/>
   
</div>
  
    );
  }
  
 
  