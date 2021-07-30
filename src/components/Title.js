import React, {useState} from 'react'

function Title(){
      const [yourName, setYourName]= useState("")
   return(
    <div>
        <h1>Character Creator</h1>
        <h2>Create Your Ideal Character!</h2>
        <p>Your Hero's Name: 
            <input onChange={(e)=>setYourName(e.target.value)} value={ yourName} placeholder="Clark"/>
        </p>
    </div>
   ) 
}

export default Title