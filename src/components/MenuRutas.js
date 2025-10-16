import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/musica">Musica</a>
          </li>
          <li>
            <a href="/form">Formulario simple</a>
          </li>
          <li>
            <a href="/collatz">Conjetura Collatz</a>
          </li>
          <li>
            <a href="/tablaMultiplicar">Tabla multiplicar</a>
          </li>
          <li>
            <a href="/tablaMultiplicarv2">Tabla multiplicar v2</a>
          </li>
        </ul>
      </div>
    );
  }
}
