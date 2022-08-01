import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg" className="App-logo" alt="logo" />
        <p>
          Hola, soy Gonzalo, este es el primer desafío.
        </p>
        <a
          className="App-link"
          href="https://github.com/gonzccode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi repositorio
        </a>
      </header>
    </div>
  );
}

export default App;
