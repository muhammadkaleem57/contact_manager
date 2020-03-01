import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'
import Axios from 'axios'

class Contact extends Component {
	state = {
		showContactInfo: false
	}
	onShowOnClick = e => {
		this.setState({ showContactInfo: !this.state.showContactInfo })
	}
	onDeleteClick = (id, dispatch) => {
		Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(
			response => {
				dispatch({ type: 'DELETE_CONTACT', payload: id })
			}
		)
	}
	render() {
		const { id, name, email, phone } = this.props.contact
		const { showContactInfo } = this.state
		return (
			<Consumer>
				{value => {
					const { dispatch } = value
					return (
						<div className='card card-body mb-3'>
							<h4>
								{name + ' '}
								<i
									style={{ cursor: 'pointer' }}
									onClick={this.onShowOnClick}
									className='fas fa-sort-down'
								></i>
								<i
									className='fas fa-times'
									style={{
										cursor: 'pointer',
										float: 'right',
										color: 'red'
									}}
									onClick={this.onDeleteClick.bind(
										this,
										id,
										dispatch
									)}
								></i>
							</h4>
							{showContactInfo ? (
								<ul className='list-group'>
									<li className='list-group-item'>
										Email: {email}
									</li>
									<li className='list-group-item'>
										Phone: {phone}
									</li>
								</ul>
							) : null}
						</div>
					)
				}}
			</Consumer>
		)
	}
}

Contact.propType = {
	contact: PropTypes.object.isRequired
}

export default Contact
