import {React} from 'react'

function ClassOptions({characterChange}){
return (
<div>
  <form>
    <label>Character Class:</label>
      <select onChange={(e)=>characterChange(e.target.value)} id= "class">
        <option value="-------"> ------ </option>
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