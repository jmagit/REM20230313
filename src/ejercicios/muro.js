import React, { Component } from 'react'
import { Esperando } from '../biblioteca/comunes';
import { Paginator } from 'primereact/paginator';

class Ficha extends Component {
    // {"id":"0","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"","download_url":"","visible":false}
    render() {
        return (
            <div className="card" style={{ width: "14rem" }}>
                {this.props.visible && <img src={this.props.download_url} className="card-img-top" alt={`Foto ${this.props.id} de ${this.props.author}`} />}
                <div className="card-body">
                    <h5 className="card-title">{this.props.author}</h5>
                    {!this.props.visible && <div className="card-text">
                        <p>Dimensión: {this.props.width}x{this.props.height}</p>
                        <p><a href={this.props.url} target="_blank" title={`Saber mas de la foto ${this.props.id}`}>Saber mas</a></p>
                        <input type="button" value="Ver foto" className="btn btn-primary" onClick={() => this.props.onVer && this.props.onVer(this.props.id)} />
                    </div>}
                </div>
            </div>
        )
    }
}
export default class Muro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listado: [],
            errorMsg: null,
            loading: true
        };
        this.page = 0;
        this.totalRecords = 1000;
        this.rows = 20;
        this.first = 0;
    }

    load(pagina = 0, filas = 20) {
        this.rows = filas;
        this.setState({ loading: true, errorMsg: null })
        fetch(`https://picsum.photos/v2/list?page=${pagina + 1}&limit=${this.rows}`)
            .then(
                resp => {
                    if (resp.ok) {
                        resp.json().then(
                            data => {
                                this.page = pagina;
                                this.first = pagina ? (pagina * this.rows) : 0
                                this.setState({ listado: data.map(item => ({ ...item, visible: false })), loading: false })
                            },
                            err => this.setState({ errorMsg: `ERROR (respuesta): ${err.status}:2 ${err.statusText}`, loading: false })
                        )
                    } else {
                        this.setState({ errorMsg: `ERROR (servidor): ${resp.status}: ${resp.statusText}`, loading: false })
                    }
                },
                err => {
                    this.setState({ errorMsg: `ERROR (petición): ${err.status}: ${err.statusText}`, loading: false })
                }
            )
    }
    mostrar(indice) {
        this.state.listado[indice].visible = true;
        this.setState({ listado: [...this.state.listado] })
    }
    render() {
        if (this.state.loading)
            return <Esperando />
        return (
            <div>
                {this.state.errorMsg && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                            viewBox="0 0 16 16"
                            width={26}
                            role="img"
                            aria-label="Error:"
                        >
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <div>{this.state.errorMsg}</div>
                    </div>
                )}
                <main className='container-fluid'>
                    <Paginator first={this.first} rows={this.rows} totalRecords={this.totalRecords} rowsPerPageOptions={[10, 20, 50, 100]} 
                        onPageChange={e => this.load(e.page, e.rows)} />
                    <div className='row'>
                        {this.state.listado.map((item, index) => <Ficha key={item.id} {...item} onVer={() => this.mostrar(index)} />)}
                    </div>
                </main>
            </div>
        )
    }

    componentDidMount() {
        this.load();
    }
}
