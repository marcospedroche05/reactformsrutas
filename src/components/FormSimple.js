import React, { Component } from "react";

export default class FormSimple extends Component {
  cajaNombre = React.createRef();

  procesarFormulario = (event) => {
    event.preventDefault();
    let nombre = this.cajaNombre.current.value;
    console.log(nombre);
    this.setState({
      nombre: nombre,
    });
  };
  state = {
    nombre: "",
  };

  render() {
    return (
      <div>
        <h1>Formulario simple</h1>
        <form onSubmit={this.procesarFormulario}>
          <label>Introduce el nombre:</label>
          <br />
          <input ref={this.cajaNombre} type="text" />
          <button type="submit">Enviar formulario</button>
          <p style={{ fontWeight: "bold" }}>{this.state.nombre}</p>
        </form>
      </div>
    );
  }
}
