import React from 'react'


function Title({yourName, setYourName}){
    function handleSubmit(e) {
        e.preventDefault();
      }
   return(
    <div>
        <h2>Create Your Ideal Character!</h2>
        <p>Your Hero's Name: 
            <input onChange={(e)=>setYourName(e.target.value)} 
            value={ yourName } placeholder="Clark"/>
            <input type="submit" onClick={handleSubmit}/>
        </p>
    </div>
   ) 
}

export default Title