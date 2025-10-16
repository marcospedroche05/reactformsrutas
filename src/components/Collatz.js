import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();
  generarNumeros = (event) => {
    event.preventDefault();
    var numeroSeleccionado = parseInt(this.cajaNumero.current.value);
    let aux = [];
    while (numeroSeleccionado != 1) {
      if (numeroSeleccionado % 2 == 0) {
        numeroSeleccionado = numeroSeleccionado / 2;
      } else {
        numeroSeleccionado = numeroSeleccionado * 3 + 1;
      }
      aux.push(numeroSeleccionado);
    }
    this.setState({
      numeros: aux,
    });
  };
  state = {
    numeros: [],
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "blueviolet" }}>Conjetura de Collatz</h1>
        <form onSubmit={this.generarNumeros}>
          <label>Introduce un número: </label>
          <input ref={this.cajaNumero} type="number" />
          <br />
          <button type="submit">Analizar número</button>
          <ul>
            {this.state.numeros.map((numero, index) => {
              return <li key={index}>{numero}</li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}
