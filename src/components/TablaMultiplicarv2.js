import React, { Component } from "react";

export default class TablaMultiplicarv2 extends Component {
  selectNumeros = React.createRef();

  generarAleatorios = () => {
    var aux = [];
    for (let i = 1; i <= 5; i++) {
      var num = parseInt(Math.random() * 100) + 1;
      aux.push(num);
    }
    return aux;
  };

  generarNumeros = (event) => {
    event.preventDefault();
    this.setState({
      tablaVisible: true,
    });
    var aux = [];
    for (let i = 1; i <= 10; i++) {
      var resutlado = parseInt(this.selectNumeros.current.value) * i;
      aux.push(resutlado);
    }
    this.setState({
      numeros: aux,
    });
  };
  state = {
    tablaVisible: false,
    numeros: [],
    numerosRandom: this.generarAleatorios(),
  };
  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarNumeros}>
          <label>Introduce un número: </label>
          <select ref={this.selectNumeros}>
            {this.state.numerosRandom.map((numero, index) => {
              return (
                <option value={numero} key={index}>
                  {numero}
                </option>
              );
            })}
          </select>
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
                      {this.selectNumeros.current.value} * {index + 1} =
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
