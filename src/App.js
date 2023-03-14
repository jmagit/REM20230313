import logo from './logo.svg';
import './App.css';

function App() {
  const nombre = '<b>Canarias</b>'
  const micolor = 'green'
  const elemento = <h1 style={{ color: micolor }}>Hola <span dangerouslySetInnerHTML={{__html: nombre}} /></h1>
  const estilo = { color: 'red' }
  estilo.color = 'blue'
  const fn = nom => <h2 style={estilo}>Hola {nom}</h2>

  let dim = { width: 40,  height: 40 }
  let old = dim
  if(dim === old) {}
  dim.width = 10
  if(dim === old) {}  
  dim = { width: 10,  height: 40 }
  if(dim === old) {}
  dim = { width: 40,  height: 40 }
  if(dim === old) {}
  dim = { ...dim,  width: 10 }
  let tab = [1,2,3,4];
  tab.push(5)
  tab = [...tab, 6]
  tab = tab.map(e => e * 2)
  const listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'Barcelona'},
    {id: 3, nombre: 'Sevilla'},
    {id: 4, nombre: 'Valencia'},
  ]
  let cargando;
  let otra = null // {algo: {mas: <p>ya tiene valor</p>}};

  if(!cargando) return <h3>Esperando</h3>;
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" {...dim} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hola {nombre.toUpperCase() + 'xxx'}
          </a>
        </header>
      </div>
      <main className='container-fluid'>
        {cargando && <h3>Esperando</h3>}
        <p>--- {cargando ? <output>{'true'}</output> : <output>'false'</output>} -----</p>
        {otra ?? <h3>Valor por defecto</h3>}
        {otra?.algo?.mas}
        {elemento}
        {fn('tu')}
        <ul>
          {tab.map((item, index) => <li key={index}>Elemento {item}</li>)}
        </ul>
        <select>
          {listado.map(item => <option key={item.id.toString()} value={item.id}>{item.nombre}</option> )}
        </select>
      </main>
    </>);
}

export default App;
