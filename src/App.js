import './App.css';
import Title from './components/title/Title';
import Navigation from './components/navigation/Navigation';
import Card from './components/card/Card';
import Cards from './pages/cards/cards';
import { useEffect, useState } from 'react';

function App() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const result = await response.json();
      console.log(result.results);
      setCardData(result.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Title>React and Morty</Title>

      <Cards cards={cardData} />
      <nav>
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
