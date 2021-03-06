import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('https://www.anapioficeandfire.com/api/characters');
    setCharacters([...data]);
  }

  useEffect(() => {
    getData();
  }, []);

  const alphabeticOrder = () => {
    const newList = characters.sort((charA, charB) => {
      if (charA.aliases < charB.aliases) return -1
      if (charA.aliases > charB.aliases) return 1
      return 0;
    });

    setCharacters([...newList]);
  }

  const bookOrder = () => {
    const newList = characters.sort((charA, charB) => {
      if (charA.books[0] > charB.books[0]) return -1
      if (charA.books[0] > charB.books[0]) return 1
      return 0;
    });

    setCharacters([...newList]);
  }

  const renderList = characters.map((character, i) => (
    <p key={i}>{character.aliases[0]}</p>
  ));

  return (
    <div className="App">
      <h1>
        Find Your Favorite Game of Thrones Characters
      </h1>
      <button onClick={alphabeticOrder}>
        Alphabetic Order
      </button>
      <button
        onClick={bookOrder}
        style={{
          marginLeft: 10,
          cursor: 'pointer'
        }}
      >
        Book Order
      </button>
      {renderList}
    </div>
  );
}

export default App;
