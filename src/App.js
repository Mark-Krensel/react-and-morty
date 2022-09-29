import "./App.css";
import Title from "./components/title/Title";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Title>React and Morty</Title>

      <ul>
        <Card />
      </ul>
      <nav>
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
