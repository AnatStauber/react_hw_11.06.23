import React from 'react'
import { useState } from 'react';
import ShowImage from './showImage';




function AppCasino() {
const [result,setResult] = useState(1)
const [coins,setCoins] = useState(5)
const [disabled, setDisabled] = useState(false);
const [resultMessage, setResultMessage] = useState("");
const [color, setColor] = useState("black");

const rollDice = () => {
    if (coins ==0) {
        setDisabled(true);
        alert("you cant play anymore. go get more coins.")
    }
    else {
        setResult(Math.floor(Math.random() * 6) + 1);
        if (result >=5){
            setCoins(coins+1);
            setResultMessage("You win!")
            setColor("green")
            
        } else {
            setResultMessage("You Lose...")
            setColor("red")
            setCoins(coins-1);
            
        }
    }
   
}

  return (
    <div className='container'>
        <h2> Coins : {coins} </h2>
        <ShowImage result={result} />
        <button disabled={disabled} onClick={rollDice}> Roll Dice </button>
        <h2 style={{color: {color}}}> {resultMessage} </h2>
       
    </div>
  )
}

export default AppCasino