import React, { Component } from 'react';
import "./estilo.css";
class FormularioDeCadastro extends Component {

	constructor(props) {
		super(props);
		this.titulo = "";
		this.texto = "";
	}
	_handleMudancaDeTitulo(evento) {
		evento.stopPropagation();
		this.titulo = evento.target.value;

	}
	_handleMudancaDeTexto(evento) {
		evento.stopPropagation();
		this.texto = evento.target.value;

	}

	_criarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();
		this.props.criarNota(this.titulo, this.texto);
		//evitar propagacao desse evento na arvore do DOM

	}

	render() {
		return (
			<form
				onSubmit={this._criarNota.bind(this)}
				className="form-cadastro"
			>
				<input
					type="text"
					placeholder="Título"
					className="form-cadastro_input"
					onChange={this._handleMudancaDeTitulo.bind(this)}
				//bind faz a associacao a instancia que esta sendo chamado
				//ele é necessário p/ essa chamada funcionar
				/>

				<textarea
					rows={15}
					placeholder="Escreva sua nota"
					className="form-cadastro_input"
					onChange={this._handleMudancaDeTexto.bind(this)}
				>

				</textarea>

				<button
					className="form-cadastro_input form-cadastro_submit">
					Criar nota
				</button>
			</form>
		);
	}
}

export default FormularioDeCadastro;