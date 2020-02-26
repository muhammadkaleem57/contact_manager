import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
	state = {
		contacts: [
			{
				id: '1',
				name: 'John Doe',
				email: 'john@gmail.com',
				phone: '555-555-555'
			},
			{
				id: '2',
				name: 'Williams',
				email: 'john@gmail.com',
				phone: '555-555-555'
			},
			{
				id: '3',
				name: 'Bella swan',
				email: 'john@gmail.com',
				phone: '555-555-555'
			},
			{
				id: '4',
				name: 'Ragnar LothBrok',
				email: 'john@gmail.com',
				phone: '555-555-555'
			}
		]
	}
	deleteContact = (id, e) => {
		const { contacts } = this.state
		const newContacts = contacts.filter(contact => contact.id !== id)
		this.setState({ contacts: newContacts })
	}
	render() {
		const { contacts } = this.state
		return (
			<React.Fragment>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						contact={contact}
						deleteClickHandler={this.deleteContact.bind(
							this,
							contact.id
						)}
					/>
				))}
			</React.Fragment>
		)
	}
}

export default Contacts
