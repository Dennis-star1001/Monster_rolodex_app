import { React, useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');
	console.log(searchField);

	useEffect(() => {

		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) =>
				setMonsters(users)
			)
	}, [])
	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	}

	const filteredMonster = monsters.filter((monster) => {
		return monster.name.toLocaleLowerCase().includes(searchField)
	})
	return (
		<div className='App'>
			<h1 className='app-title'>Monster Rolodex</h1>
			<SearchBox
				className='monsters-search-box'
				change={onSearchChange}
				placeholder='search monsters'


			/>
			{/* {this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>
				})} */}
			<div className='card-list'>
				{monsters.map((monster) => {
					return (
						<div div className='card-container' key={monster.id}>
							<img
								alt={`monster ${monster.name}`}
								src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
							/>
							<h2>{monster.name}</h2>
							<p>{monster.email}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
// class App extends Component {
// 	constructor() {
// 		super()

// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		}
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((res) => res.json())
// 			.then((users) =>
// 				this.setState(
// 					() => {
// 						return {
// 							monsters: users,
// 						}
// 					},
// 					// () => {
// 					// 	console.log(this.state)
// 					// },
// 				),
// 			)
// 	}
// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase()

// 		this.setState(() => {
// 			return { searchField }
// 		})
// 	}
// 	render() {
// 		const { monsters, searchField } = this.state
// 		const { onSearchChange } = this
// 		// const monsterString = event.target.value.toLocaleLowerCase()
// 		const filteredMonster = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField)
// 		})

// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monster Rolodex</h1>
// 				<SearchBox
// 					className='monsters-search-box'
// 					change={onSearchChange}
// 					placeholder='search monsters'
// 				/>
// 				{/* {this.state.monsters.map((monster) => {
// 				return <h1 key={monster.id}>{monster.name}</h1>
// 			})} */}
// 				<CardList monsters={filteredMonster} />
// 			</div>
// 		)
// 	}
// }
export default App
