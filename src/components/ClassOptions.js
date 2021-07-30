import {React, useState} from 'react'

function ClassOptions(){
    function handleSubmit(e) {
      e.preventDefault();
    }
const [characterClass, setCharacterClass]= useState("")
return (
<div>
  <form>
    <label>Character Class:</label>
      <select onChange={(e)=>setCharacterClass(e.target.value)} id= "class">
        <option value="-------">------</option>
        <option value="Tank">Tank</option>
        <option value="Mage">Mage</option>
        <option value="Healer">Healer</option>
        <option value="Rogue">Rogue</option>
      </select>
  </form>
</div>
)
}

export default ClassOptions