import React from 'react'
import {connect} from "react-redux"

const Titulares = ({titulares, eliminarTitular}) => (
	<section>
		<h2>Titulares</h2>

		<div className="cancha">
			{
				titulares.map(j => (
					<article className="titular" key={j.id}>
						<div>
							<img src={j.foto} alt={j.nombre}/>
							<button onClick={() => eliminarTitular(j)}>x</button>
						</div>
						<p>{j.nombre}</p>
					</article>
				))
			}
		</div>
	</section>
)

const mapStateToProps = state =>({
	titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
	eliminarTitular(jugador){
		dispatch({
			type: "ELIMINAR_TITULAR",
			jugador
		})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)