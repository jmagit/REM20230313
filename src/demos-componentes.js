import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Demos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: 0
        }
    }
    render() {
        return (
            <>
                {/* <Saludo nombre="Don Pepito" />
            <Saludo nombre="Don Jose" />
            <Despide nombre="Don Jose" />
            <Despide nombre="Don Pepito" />
            <Despide /> */}
                <Contador init={666} delta={1} onCambia={v => this.setState({valor: v})} />
                <p>El valor es: {this.state.valor}</p>
                <Saludo nombre={"Don Jose " + this.state.valor} />
                {/* <Card titulo="Mi titulo" boton={<input type='button' value="cierra" />}>
                Esto es el contenido
                <Despide nombre="Don Jose" />
            </Card> */}
            </>
        );
    }
}

function Saludo(props) {
    return <h1>Hola {props.nombre}</h1>
}
const Despide = ({ nombre }) => {
    return <h1>Adios {nombre}</h1>
}

function Card(props) {
    return (
        <div className='card'>
            <h1 style={{ backgroundColor: 'aquamarine' }}>{props.titulo}</h1>
            <section>
                {props.children}
            </section>
            {props.boton}
        </div>
    )
}

export class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: this.props.init
        }
        this.pulsaciones = 0;
        this.baja = this.baja.bind(this)
        this.pulsa = (ev) => {
            this.pulsaciones++
            console.log(this.pulsaciones)
            console.warn(ev)
        }
    }
    cambiaContador(delta) {
        this.setState((prev) => {
            const cont = prev.contador + delta
            if (this.props.onCambia)
                this.props.onCambia(cont);
            return { contador: cont }
        })
        this.pulsaciones++
        console.log(this.pulsaciones)
    }
    sube(ev) {
        this.cambiaContador(this.props.delta)
        console.warn(ev)
    }
    baja(ev) {
        this.cambiaContador(-this.props.delta)
        console.warn(ev)
    }
    pulsa() {
        this.pulsaciones++
        console.log(this.pulsaciones)
    }
    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <p>
                    <button onClick={this.baja}>Baja</button>&nbsp;
                    <button onClick={this.sube.bind(this)}>Sube</button>
                    <button onClick={this.pulsa}>Pulsa</button>
                    <button onClick={ev => console.warn(ev)}>Pulsa</button>
                </p>
            </div>
        );
    }
}
Contador.propTypes = {
    init: PropTypes.number.isRequired,
    delta: PropTypes.any,
    onCambia: PropTypes.func
};
Contador.defaultProps = {
    delta: 5
};
