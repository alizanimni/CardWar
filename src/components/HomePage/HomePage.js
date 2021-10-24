import React, {useState} from 'react'
import './HomePage.css'

export default function HomePage(props) {

    const[name,setName] = useState('');

    const insertName = (e) =>{
        setName(e.target.value);
    }

    return (
        <div>
            <h1 className = 'title'> Ready For War</h1>
            <input onChange = {insertName} placeholder="Enter Your Name" />
            <br />
            <button onClick={()=>{props.validName(name)}}>Start</button>
        </div>
    )
}
