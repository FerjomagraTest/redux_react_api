import React from 'react'

import {connect} from "react-redux"

const Suplentes = ({suplentes, eliminarSuplente}) => (

	<section>
		<h2>Suplentes</h2>

		<div className="banca">
			{
				suplentes.map(j => (
					<article className="suplente" key={j.id}>
						<div>
							<img src={j.foto} alt={j.nombre}/>
							<button onClick={() => eliminarSuplente(j)}>x</button>
						</div>
						<p>{j.nombre}</p>
					</article>
				))
			}
		</div>
	</section>
)

const mapStateToProps = state =>({
	suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
	eliminarSuplente(jugador){
		dispatch({
			type: "ELIMINAR_SUPLENTE",
			jugador
		})
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)