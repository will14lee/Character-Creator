import React from 'react';
// import ReactDom from 'react-dom'
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
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You've submitted the form!")
  }

return (
    <div className="App">
      <NavBar aboutPages={ aboutPages }/>
      <Title/>
      <ClassOptions/>
      {/* <Table/> */}
      <Skills/>
      <About handleSubmit={ handleSubmit }/>
    </div>
  );
}

export default App;