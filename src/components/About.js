import React from 'react'

const About = ({handleSubmit, about, aboutChange}) => {
    // const [about, setAbout]= useState('')
    return (
        <div>
            <h3>About Your Character!:</h3>
            <textarea value= { about } onChange={(e)=>{aboutChange(e.target.value)}} rows= "10" cols= "80"/>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit Character</button>
            
        </div>
    )
}
export default About
