import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();

  mostrarSeleccionados = (event) => {
    event.preventDefault();
    var data = "";
    let opciones = this.selectMultiple.current.selectedOptions;
    for (var opcion of opciones) {
      data += opcion.value + " ";
    }
    this.setState({
      seleccionados: data,
    });
  };

  state = {
    seleccionados: "",
  };

  render() {
    return (
      <div>
        <h1>Seleccion multiple</h1>
        <h2>Seleccionados: {this.state.seleccionados}</h2>
        <form>
          <select
            multiple
            size={"5"}
            ref={this.selectMultiple}
            onChange={this.mostrarSeleccionados}
          >
            <option>Opcion 1</option>
            <option>Opcion 2</option>
            <option>Opcion 3</option>
            <option>Opcion 4</option>
            <option>Opcion 5</option>
          </select>
        </form>
      </div>
    );
  }
}
