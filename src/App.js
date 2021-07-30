import React from 'react';
import ReactDom from 'react-dom'
import NavBar from './components/NavBar';
import './App.css';
import Title from './components/Title';
import ClassOptions from './components/ClassOptions';
import Skills from './components/SkillPoints';
import About from './components/About';
// import Table from './Table'

function App() {    
  const aboutPages= {
    Home: "Home",
    Info: "Information",
    Character: "Created Characters"
  }
return (
    <div className="App">
      <NavBar aboutPages={ aboutPages }/>
      <Title/>
      <ClassOptions/>
      {/* <Table/> */}
      <Skills/>
      <About/>
    </div>
  );
}

export default App;