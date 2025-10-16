import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();

  generarNumeros = (event) => {
    event.preventDefault();
    this.setState({
      tablaVisible: true,
    });
    var aux = [];
    for (let i = 1; i <= 10; i++) {
      var resutlado = parseInt(this.cajaNumero.current.value) * i;
      aux.push(resutlado);
    }
    this.setState({
      numeros: aux,
    });
  };
  state = {
    tablaVisible: false,
    numeros: [],
  };
  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarNumeros}>
          <label>Introduce un número: </label>
          <input type="number" ref={this.cajaNumero} />
          <br />
          <button type="submit">Generar tabla</button>
        </form>
        {this.state.tablaVisible && (
          <table border={1} style={{ textAlign: "center" }}>
            <tbody>
              {this.state.numeros.map((resultado, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {this.cajaNumero.current.value} * {index + 1} =
                    </td>
                    <td>{resultado}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
