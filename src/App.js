import React, {useState} from 'react'
import './App.css';
import HomePage from './components/HomePage/HomePage.js';
import GamePage from './components/GamePage/GamePage.js';
import ScorePage from './components/ScorePage.js';


function App() {

  const [pages,setPages] = useState(0);
  const [player , setPlayer] = useState({});
  const[playerDeck,setPlayerDeck] = useState([]);
  const[computerDeck,setComputerDeck] = useState([]);



  const createDeck =()=>{
    let temp = [];
    for(let i = 1 , cardValue = 1 ; i <= 52 ; i++){
      temp.push(cardValue);
      if(i % 4 == 0){
        cardValue++;
      }
    }
   

   
    let rnd1;
    let compDeck = [];
    let playerDeck = [];
    for(let i=0; i<26; i++){
      
      rnd1 = Math.floor(Math.random() * temp.length);
      compDeck.push(temp[rnd1]);
      temp.splice(rnd1,1); 
    
      
      rnd1 = Math.floor(Math.random() * temp.length);
      playerDeck.push(temp[rnd1]);
      temp.splice(rnd1,1);
    }

    setPlayerDeck([...playerDeck]);
    setComputerDeck([...compDeck]);
  }

  const initPlayer = (name)=>{
    if(name.length >0){
      setPages(1);
      setPlayer({fullName: name, win:0 , lose:0, numOfGames:0});
      createDeck();
    }
    else{
      alert('Error');
    }
  }

  const playAgain=()=>{
    setPages(1);
    createDeck();
  }

  const tryAgain=()=>{
    let tempPlayer= player;
    tempPlayer.numOfGames=0;
    tempPlayer.win=0;
    tempPlayer.lose=0;
    setPlayer(tempPlayer)
    setPages(1);
    createDeck();
  }

  const finishGame=(win)=>{
    let tempPlayer= player;
    tempPlayer.numOfGames++;
    if(win=='p'){
      tempPlayer.win++;
    }
    else if(win=='c'){
      tempPlayer.lose++
    }
    setPlayer(tempPlayer);
    setPages(2);
  }
  
  const quit=()=>{
    setPages(0)
  }

  const switchPages = () =>{
    if(pages == 0){
      return <HomePage validName = {initPlayer} />
    }
    else if(pages == 1){
      return <GamePage end={finishGame} playerDeck = {playerDeck} playerName={player.fullName} computerDeck={computerDeck}/>
    }
    else if(pages == 2){
       return <ScorePage quit={quit} tryAgain={tryAgain} player={player} playAgain={playAgain}/>
    }
  }
  



  return (
    <div className="App">

     {switchPages()}



    </div>
  );
}

export default App;
