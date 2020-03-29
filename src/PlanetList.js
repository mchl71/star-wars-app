import React from 'react'
import './PlanetList.css'

const PlanetList = ({planets}) => {
	console.log("planets", planets)
	const renderPlanets = planets.map((planet, index) => {
		return (
			<div className='planetCardContainer' key={index}>
				<p>Name: {planet.name}</p>
				<p>Terrain: {planet.terrain}</p>
				<p>Einwohner: {planet.population}</p>
			</div>
		)
	})
	return (
		<div className='planetListContainer'>
			{renderPlanets}
		</div>
	)
}

export default PlanetList