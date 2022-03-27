import logo from './img/rick-morty.png';
import './App.css';
import getCharacter from './providers/getCharacter';
import Characters from './components/Characters';
import { useState } from 'react';

function App() {
  const [character, setCharacter] = useState(null)
  const characters = () =>{
    (async () => {
      setCharacter(await getCharacter())
    })()
  }
  
  return (
    
    <div className="App">
      <header className="App-header">
        {character ? 
        <Characters characters = {character} setCharacter = {setCharacter}/>
        :
        <>
          <h1 className='title'>Rick and Morty</h1>
          <img src={logo} alt='Rick and Morty' className='img-home'></img>
          <button onClick={characters} className='btn-search'>Buscar Personaje</button>
        </>
        }
      </header>
    </div>
    
  );
}

export default App;
