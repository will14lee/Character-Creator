import React from 'react'

function Title(){
    function handleSubmit(e) {
        e.preventDefault();
      }
   return(
    <div>
        <h1>Character Creator</h1>
        <h2>Create Your Ideal Character!</h2>
        <p>Your Hero's Name: <input id="name" placeholder="Clark"></input><input type="submit" onClick={handleSubmit}></input></p>
    </div>
   ) 
}

export default Title