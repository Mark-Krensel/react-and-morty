import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">React and Morty</header>
      <ul>
        <li>
          <p>Morty Smith</p>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt=""
          />
        </li>
      </ul>
      <nav>
        <ul>
          <li>Home</li>
          <li>Favourite</li>
          <li>Special1</li>
          <li>Special2</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
