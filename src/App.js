import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('https://www.anapioficeandfire.com/api/characters');
    setCharacters(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Find Your Favorite Game of Thrones Characters</h1>
      <button>Alphabetic Order</button>
      {
        characters.map(
          character => (
            <p>{character.aliases[0]}</p>
          )
        )
      }
    </div>
  );
}

export default App;
