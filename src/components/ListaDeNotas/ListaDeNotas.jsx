import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import "./estilo.css";

class ListaDeNotas extends Component {
	render() {
		return (
			<ul>
				{this.props.notas.map((nota, indice) => {
					return (
						<li className="lista-notas" key={indice}>
							<CardNota titulo={nota.titulo} texto={nota.texto}/>
						</li>
					);
				})}
			</ul>

		);
	}
}

export default ListaDeNotas;