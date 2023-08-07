import { Component } from 'react'
import './card.style.css'
const Card = ({monster}) => {



	return (
		<div div className='card-container' key={monster.id}>
			<img
				alt={`monster ${monster.name}`}
				src={`https://robohash.org/${3}?set=set2&size=180x180`}
			/>
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	)
}

export default Card
