import React, {useState} from 'react'
import Card from '../Card/Card.js';

export default function GamePage(props) {

    const[index, setIndex] = useState(0);
    const[compPoints,setCompPoints] = useState(0);
    const[playerPoints,setPlayerPoints] = useState(0);
    
     const sendPlayerCardValue =()=>{
         return props.playerDeck[index];
     }

     const sendCompCardValue =()=>{
        return props.computerDeck[index];
    }

    const incIndex = ()=>{
        let p1 = playerPoints;
        let p2 = compPoints;
        if(props.playerDeck[index] > props.computerDeck[index]){
            p1++;
            setPlayerPoints(p1);
        }
        else if(props.computerDeck[index] > props.playerDeck[index]){
            p2++;
            setCompPoints(p2);
        }
        let temp = index;
        temp++;
        setIndex(temp);

        if(index == 25){
            let winner='';
            if(compPoints>playerPoints){
                winner='c';
            }
            else if(playerPoints>compPoints){
                winner='p';
            }
            props.end(winner);
        }
    }


    return (
        <div>
            <h2>Computer</h2>
            <Card cardValue = {sendCompCardValue()} />

            <h2>{props.playerName}</h2>
            <Card cardValue = {sendPlayerCardValue()} />

            <br />
            <button onClick = {incIndex}> Next</button>
        </div>
    )
}
