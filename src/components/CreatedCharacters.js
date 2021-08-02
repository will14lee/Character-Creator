import React, {useState, useEffect} from 'react'


const CreatedCharacters = () => {
    const [charas, setCharas] = useState({})
    useEffect(() => {
        fetch('http://localhost:3001/Characters/')
        .then(resp => resp.json())
        .then(data =>setCharas(data))
    },[])
    const all= charas.map()
    // console.log(all)
      function CharacterForm(){
          return(
          <div>
          <p>Name: {charas.Name}</p>
          <p>Class: {charas.Class}</p>
          <p>Stats: HP: {charas.HP} MP: {charas.MP} ATK: {charas.ATK} 
          DEF: {charas.DEF}MATK: {charas.MATK} MDEF: {charas.MDEF} 
          AGI: {charas.AGI} LUCK: {charas.LUCK}</p>
          <p>Information: {charas.Information}</p>
          </div>
          )
      }
    return (
        <div>
            <h3>My Characters</h3>
            <CharacterForm/>
        </div>
    )
}

export default CreatedCharacters
