import './App.css';
// import {DemosJSX} from './demos-jsx'
// import DemosComponentes from './demos-componentes'
import Calculadora, { CalculadoraView as Calc, CalculadoraDemo } from './ejercicios/calculadora';

function App() {
  return (
    <>
      <Head />
      <main className='container-fluid'>
        {/* <DemosComponentes /> */}
        <CalculadoraDemo />
        {/* <Calculadora />
      <Calc init={666} coma /> */}
      </main>
      <Foot />
    </>
  )
}

function Head() {
  const opcionesDelMenu = [
    {texto: 'Inicio', url: '/'},
    {texto: 'Demos', url: '/demos'},
    {texto: 'Calculadora', url: '/calc'},
    {texto: 'Perfil', url: '/perfil'},
  ]
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu opciones={opcionesDelMenu} />
          <Buscar />
        </div>
      </div>
    </nav>);
}
function Menu(props) {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {props.opciones.map((item, index) => (
      <li key={index} className="nav-item">
        <a className="nav-link" href={item.url}>
          {item.texto}
        </a>
      </li>
      ))}
    </ul>
  );
}
function Buscar() {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
function Foot() {
  return (
    <footer>
      Esto es el pie
    </footer>
  );
}

export default App;
