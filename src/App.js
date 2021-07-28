import {React} from 'react';
import './App.css';
import Title from './components/Title.js'
import ClassOptions from './components/ClassOptions.js'
import Skills from './components/SkillPoints'

function App() {    
return (
    <div className="App">
      <Title/>
      <ClassOptions/>
      <Skills/>
    </div>
  );
}

export default App;
