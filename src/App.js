import logo from './logo.svg';
import './App.css';

function App() {
  const nombre = 'Canarias'
  const elemento = <h1>Hola {nombre}</h1>
  const fn = nom => <h1>Hola {nom}</h1>

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hola {nombre.toUpperCase()}
          </a>
        </header>
      </div>
      {elemento}
      {fn('tu')}
    </>);
}

export default App;
