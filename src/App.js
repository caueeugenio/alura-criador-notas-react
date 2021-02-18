import React, { Component } from "react";
import FormularioDeCadastro from './components/FormularioDeCadastro/FormularioDeCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {

  constructor() {
    super();
    this.notas = [];

    this.state = {
      notas:[]
    }
  }
  
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
 
    this.setState(novoEstado);
  }



  render() {
    return (
      <section className="conteudo" >
        <FormularioDeCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}
//react -> lib
//React -> ecossistema
export default App;
