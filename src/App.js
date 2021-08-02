import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Title from './components/Title';
import ClassOptions from './components/ClassOptions';
import Skills from './components/SkillPoints';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './components/Table'
import Information from './components/Information'
import CreatedCharacter from './components/CreatedCharacters'



function App() { 
  const [yourName, setYourName]= useState("")   
  const [about, setAbout]= useState('')
  const [characterClass, setCharacterClass]= useState("")
  let [skillPoint, setSkillPoint] = useState(100);
    let [statPoint, setStatPoint] = useState(
        {
            HP: 0,
            MP: 0,
            ATK: 0,
            DEF: 0,
            MATK: 0,
            MDEF: 0,
            AGI: 0,
            LUCK: 0
        }
    )
  function handleSubmit(e) {
    e.preventDefault();
    const form={
      Name: yourName,
      Class: characterClass,
      Stats: statPoint,
      Information: about
    }
    fetch("http://localhost:3001/Characters", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( form )
    })
    .then(resp=> resp.json())
    .then(resp=> {console.log(resp)
      setYourName("")
      setCharacterClass("")
      setStatPoint({
        HP: 0,
        MP: 0,
        ATK: 0,
        DEF: 0,
        MATK: 0,
        MDEF: 0,
        AGI: 0,
        LUCK: 0
      })
      setSkillPoint(100)
      setAbout("")
      alert("Your Character Has Been Submitted Check it out!")
    })
  }
  
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route 
            exact path="/"
            render={ 
              (props) => 
              <div>
              <NavBar/>
              <h1>Character Creator</h1>
              <h2>Home</h2>
              <Title yourName= {yourName} setYourName= {setYourName}/>
              <ClassOptions characterClass= {characterClass} characterChange= {setCharacterClass}/>
              <Skills skillPoint= {skillPoint} setSkillPoint= {setSkillPoint} statPoint={statPoint} setStatPoint= {setStatPoint}/>
              <About handleSubmit={ handleSubmit } about= {about} aboutChange= {setAbout}/>
              </div>
            }
          />
          <Route 
            exact path="/Information"
            render={ 
              (props) =>   
              <div>
                <NavBar/>
                <h1>Character Creator</h1>
                <Information/>
                <Table/>
              </div>
            }
          />
          <Route 
            exact path="/Created-Characters"
            render={ 
              (props) =>   
              <div>
                <NavBar/>
                <h1>Character Creator</h1>
                <h2>Created Characters</h2>
                <CreatedCharacter/>
              </div>
            }
          />
          <Route
            render={() => <h1>404 Error: Page Not Found</h1>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;