import React, { Component } from 'react'
import { Esperando } from '../biblioteca/comunes';

export default class Muro extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listado: [], 
            errorMsg: null,
            loading: true 
        };
    }

    load(pagina = 0) {
        this.setState({ loading: true, errorMsg: null  })
        fetch(`https://picsum.photos/v2/lista?page=${pagina}&limit=20`)
            .then(
                resp => {
                    if(resp.ok) {
                        resp.json().then(
                            data => this.setState({ listado: data, loading: false }),
                            err => this.setState({ errorMsg: `ERROR Respuesta: ${err.status}:2 ${err.statusText}`, loading: false })
                        )
                    } else {
                        this.setState({ errorMsg: `ERROR Servidor: ${resp.status}: ${resp.statusText}`, loading: false })
                    }
                },
                err => {
                    this.setState({ errorMsg: `ERROR Petición: ${err.status}: ${err.statusText}`, loading: false })
                }
            )
    }

    render() {
        if(this.state.loading)
            return <Esperando />
        return (
            <div>
                {this.state.errorMsg}
                {JSON.stringify(this.state.listado)}
            </div>
        )
    }

    componentDidMount() {
        this.load();
    }
}
