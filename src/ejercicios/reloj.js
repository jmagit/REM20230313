import React, { Component } from 'react'

export default class Reloj extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hora: new Date()
        }
    }

    render() {
        return (
            <div>{this.state.hora.toLocaleTimeString()}</div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({hora: new Date()})
            console.log((new Date()).toLocaleTimeString())
        }, 1000)
    }
}
