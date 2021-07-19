import {createStore} from 'redux'

const initialState = {
	jugadores: [{
		id: 1,
		nombre: "Fernando Madueño Grasso",
		foto: "https://res.cloudinary.com/dintair/image/upload/v1591830255/h8dex1vhopyb3rbb6uye.jpg"
	}, {
		id: 2,
		nombre: "Andrea Pirlo",
		foto: "https://res.cloudinary.com/dintair/image/upload/v1591830255/h8dex1vhopyb3rbb6uye.jpg"
	}, {
		id: 3,
		nombre: "Luis Peres",
		foto: "https://res.cloudinary.com/dintair/image/upload/v1591830255/h8dex1vhopyb3rbb6uye.jpg"
	}],
	titulares: [],
	suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

	if(action.type === "AGREGAR_TITULAR"){
		return{
			...state,
			titulares: state.titulares.concat(action.jugador),
			jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
		}
	} else {
		if(action.type === "ELIMINAR_TITULAR"){
			return{
				...state,
				titulares: state.titulares.filter(j => j.id !== action.jugador.id),
				jugadores: state.jugadores.concat(action.jugador)
			}
		}
	}

	if (action.type === "AGREGAR_SUPLENTES"){
		return{
			...state,
			suplentes: state.suplentes.concat(action.jugador),
			jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
		}
	} else{
		if(action.type === "ELIMINAR_SUPLENTE"){
			return{
				...state,
				suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
				jugadores: state.jugadores.concat(action.jugador)
			}
				
		}
	}
	return state
}

export default createStore(reducerEntrenador)