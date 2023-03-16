import './App.css';
import {DemosJSX} from './demos-jsx'
import DemosComponentes from './demos-componentes'
import Calculadora, { CalculadoraView as Calc, CalculadoraDemo } from './ejercicios/calculadora';
import React, { Component } from 'react'
import Reloj from './ejercicios/reloj';

class App extends Component {
  constructor(props) {
    super(props)
    this.opcionesDelMenu = [
      { texto: 'Inicio', url: '/', componente: <DemosJSX /> },
      { texto: 'Demos', url: '/demos', componente: <DemosComponentes /> },
      { texto: 'Calculadora', url: '/calc', componente: <CalculadoraDemo coma />,  },
      { texto: 'Perfil', url: '/perfil', componente: <Calc init={666} coma /> },
      { texto: 'Boton', url: '/perfil', componente: <input type="button" value="demos" onClick={() => this.setState({ seleccionado: 1 })} /> },
    ]
    this.state = { seleccionado: 0 }
  }
  seleccionaEnElMenu(opcion) {
    this.setState({ seleccionado: opcion })
  }
  render() {
    return (
      <>
        <Head opciones={this.opcionesDelMenu} seleccionado={this.state.seleccionado} onMenuChange={op => this.seleccionaEnElMenu(op)} />
        <main className='container-fluid'>
          {this.opcionesDelMenu[this.state.seleccionado].componente}
        </main>
        <Foot />
      </>
    )
  }
}

function Head(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: '#e3f2fd'}}>
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
          <Menu opciones={props.opciones} seleccionado={props.seleccionado} onMenuChange={props.onMenuChange} />
          <Buscar />
        </div>
      </div>
    </nav>);
}
function Menu(props) {
  const haceClick = (indice, ev) => {
    ev.preventDefault()
    if (props.onMenuChange)
      props.onMenuChange(indice)
  }
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {props.opciones.map((item, index) => (
        <li key={index} className="nav-item">
          <a className={"nav-link" + (props.seleccionado === index ? " active" : "")} href={item.url} onClick={ev => haceClick(index, ev)}>
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
    <footer style={{backgroundColor: '#e3f2fd'}}>
      <Reloj />
    </footer>
  );
}

export default App;
