import React, {useState} from 'react'

function Title(){
    function handleSubmit(e) {
        e.preventDefault();
      }
      const [yourName, setYourName]= useState("")
   return(
    <div>
        <h1>Character Creator</h1>
        <h2>Create Your Ideal Character!</h2>
        <p>Your Hero's Name: <input onChange={(e)=>setYourName(e.target.value)} value={ yourName} placeholder="Clark"></input><input type="submit" onClick={handleSubmit}></input></p>
    </div>
   ) 
}

export default Title