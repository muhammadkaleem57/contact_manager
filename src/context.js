import React, { Component } from 'react'
import Axios from 'axios'

const Context = React.createContext()
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [action.payload, ...state.contacts]
			}
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.payload
				)
			}
		default:
			return state
	}
}

export class Provider extends Component {
	state = {
		contacts: [],
		dispatch: action => this.setState(state => reducer(state, action))
	}
	componentDidMount() {
		Axios.get('https://jsonplaceholder.typicode.com/users').then(
			response => {
				this.setState({ contacts: response.data })
			}
		)
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer
