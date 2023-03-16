import React, { Component } from 'react'
import { Esperando } from '../biblioteca/comunes';

export default class Muro extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listado: [], 
            loading: true 
        };
    }

    render() {
        if(this.state.loading)
            return <Esperando />
        return (
            <div>Muro</div>
        )
    }
}
