import {
	GET_PLANETS_SUCCESS,
	GET_PLANETS_PENDING,
	GET_PLANETS_FAILED
} from './constants'

export const getPlanets = () => (dispatch) => {
	dispatch({type: GET_PLANETS_PENDING})
	fetch('https://swapi.co/api/planets')
		.then(resp => resp.json())
		.then(res => dispatch({type: GET_PLANETS_SUCCESS, payload: res.results}))
		.catch(err => dispatch({type: GET_PLANETS_FAILED, payload: err}))
}