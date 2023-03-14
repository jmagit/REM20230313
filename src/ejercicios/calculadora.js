import React, { Component } from 'react'

export default class Calculadora extends Component {
  render() {
    return (
      <table>
        <thead>
            <tr>
                <th className='Pantalla' colSpan={4}>
                    0
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input className='btnOperador' type="button" value="C" /> </td>
                <td colSpan={2}><input className='btnOperador' type="button" value="Borra" /> </td>
                <td><input className='btnOperador' type="button" value="/" /> </td>
            </tr>
            <tr>
                <td><input className='btnDigito' type="button" value="7" /> </td>
                <td><input className='btnDigito' type="button" value="8" /> </td>
                <td><input className='btnDigito' type="button" value="9" /> </td>
                <td><input className='btnOperador' type="button" value="*" /> </td>
            </tr>
            <tr>
                <td><input className='btnDigito' type="button" value="4" /> </td>
                <td><input className='btnDigito' type="button" value="5" /> </td>
                <td><input className='btnDigito' type="button" value="6" /> </td>
                <td><input className='btnOperador' type="button" value="-" /> </td>
            </tr>
            <tr>
                <td><input className='btnDigito' type="button" value="1" /> </td>
                <td><input className='btnDigito' type="button" value="2" /> </td>
                <td><input className='btnDigito' type="button" value="3" /> </td>
                <td><input className='btnOperador' type="button" value="+" /> </td>
            </tr>
            <tr>
                <td><input className='btnDigito' type="button" value="+-" /> </td>
                <td><input className='btnDigito' type="button" value="0" /> </td>
                <td><input className='btnDigito' type="button" value="," /> </td>
                <td><input className='btnOperador' type="button" value="=" /> </td>
            </tr>
        </tbody>
      </table>
    )
  }
}
