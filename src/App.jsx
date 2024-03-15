import './App.css'
import IntroBox from './components/introbox'
import AboutMe from './components/aboutme'
import Projects from './components/projects'
import Contact from './components/contact'
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(<p></p>);

  return (
    <div className="App">
      <IntroBox />
      <ul id="nav-bar">
        <li><button onClick={() => {setPage(<AboutMe />)}}>About Me</button></li>
        <li><button onClick={() => {setPage(<Projects />)}}>Projects</button></li>
        <li><button onClick={() => {setPage(<Contact />)}}>Contact</button></li>
      </ul>
      <div className='content-container'>{page}</div>
    </div>
  )
}

export default App
