import {
	GET_PLANETS_SUCCESS,
	GET_PLANETS_PENDING,
	GET_PLANETS_FAILED
} from './constants'

const initialState = {
	planets: [],
	isPending: false,
	error: ''
}

export const getRobots = (state=initialState, action={}) => {
	switch(action.type) {
		case GET_PLANETS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case GET_PLANETS_SUCCESS:
			return Object.assign({}, state, {isPending: false, planets: action.payload})
		case GET_PLANETS_FAILED:
			return Object.assign({}, state, {isPending: false, error: action.payload})
		default:
			return state
	}
}