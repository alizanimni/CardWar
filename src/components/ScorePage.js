import React,{useState} from 'react'

export default function ScorePage(props) {

    const [flag,setFlag]=useState(0);

    const end=()=>{
        if (props.player.win>props.player.lose){
          setFlag(1)
        }
        else if(props.player.win<props.player.lose){
           setFlag(2) 
        }
        else{
            setFlag(3)
        }
    }

    const show=()=>{
        if(flag==0){
            return(
                <div>
                   <button onClick={()=>{props.playAgain()}}>Play Again</button>
                   <button onClick={end}>end</button> 
                </div>
            )
        }
        if (flag==1){
            return(
              <div>
                     <p>the score is:</p> 
                     <p>{props.player.fullName}: {props.player.win} </p>
                     <p>computer: {props.player.lose}</p>
                     <p>num of games: {props.player.numOfGames}</p>
                     <br></br>
                     <h2>you won! Congratulations!</h2>
                     <button onClick={()=>{props.tryAgain()}}>Try Again</button><br></br>
                     <button onClick={()=>{props.quit()}}>Quit</button> 
                
              </div>
          )  
          }
          else if(flag==2){
              return(
                  <div>
                      <br></br>
                      <p>the score is:</p> 
                      <p>computer: {props.player.lose}</p>
                      <p>{props.player.fullName}: {props.player.win} </p>
                      <p>num of games: {props.player.numOfGames}</p>
                      <br></br>

                      <h2>The computer won! next time you will get better!</h2>
                      <button onClick={()=>{props.tryAgain()}}>Try Again</button><br></br>
                      <button onClick={()=>{props.quit()}}>Quit</button> 
                      
                  </div>
              )  
          }
          else if(flag==3){
              return(
                  <div>
                     <p>the score is:</p>
                     <p>computer:{props.player.lose}</p>
                     <p>{props.player.fullName}:{props.player.win} </p>
                     <p>num of games: {props.player.numOfGames}</p>
                     <br></br>
                      <h2>Tie!</h2>
                      <button onClick={()=>{props.tryAgain()}}>Try Again</button><br></br>
                     <button onClick={()=>{props.quit()}}>Quit</button> 
                  </div>
              )  
          }
    }


    return (
        <div>

            <h2></h2>

            
            {show()}
            
        </div>
    )
}
