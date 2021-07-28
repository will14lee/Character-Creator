import React from 'react'

function ClassOptions(){
    function handleSubmit(e) {
      e.preventDefault();
    }
function Choices(props){
  return <option value="">{props.name}</option> 
} 
return (
<div>
  <form>
    <label>Character Class:</label>
      <select>
        <Choices name="-------"/>
        <Choices name="Tank"/>
        <Choices name="Mage"/>
        <Choices name="Rogue"/>
        <Choices name="Archer"/>
        <Choices name="Healer"/>
      </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
  </form>
</div>
)
}

export default ClassOptions