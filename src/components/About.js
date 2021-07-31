import React, {useState} from 'react'

const About = (props) => {
    const [about, setAbout]= useState('')
    return (
        <div>
            <h3>About Your Character!:</h3>
            <textarea value= {about} onChange={(e)=>{setAbout(e.target.value)}} rows= "10" cols= "80">
            </textarea>
            <br/>
            <button type="submit" onClick={props.handleSubmit}>Submit Character</button>
            
        </div>
    )
}
export default About
