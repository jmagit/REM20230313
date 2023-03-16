import React, { Component } from 'react'

export default class Reloj extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hora: new Date()
        }
        this.intervalo = null;
    }

    render() {
        return (
            <div>{this.state.hora.toLocaleTimeString()}</div>
        )
    }

    componentDidMount() {
        this.intervalo = setInterval(() => {
            this.setState({hora: new Date()})
            // console.log((new Date()).toLocaleTimeString())
        }, 1000)
    }

    // componentDidUpdate() {
    //     this.setState({hora: new Date()})
    //     console.log((new Date()).toLocaleTimeString())
    // }

    componentWillUnmount() {
        clearInterval(this.intervalo)
        // console.log('Paro el Interval')
    }
}
