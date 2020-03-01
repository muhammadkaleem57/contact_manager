import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import Axios from 'axios'

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}
	onChange = e => this.setState({ [e.target.name]: e.target.value })
	onSubmit = (dispatch, e) => {
		e.preventDefault()
		const { name, email, phone } = this.state
		if (!name) {
			this.setState({ errors: { name: 'Name is required' } })
			return
		}
		if (!email) {
			this.setState({ errors: { email: 'Email is required' } })
			return
		}
		if (!phone) {
			this.setState({ errors: { phone: 'Phone is required' } })
			return
		}
		const newContact = {
			name,
			email,
			phone
		}
		Axios.post(
			'https://jsonplaceholder.typicode.com/users',
			newContact
		).then(response => {
			dispatch({ type: 'ADD_CONTACT', payload: response.data })
		})
		console.log(this.state)
		this.setState({ name: '', email: '', phone: '', errors: {} })
		this.props.history.push('/')
	}
	render() {
		const { name, email, phone, errors } = this.state
		return (
			<Consumer>
				{value => {
					const { dispatch } = value
					return (
						<div className='card mb-3'>
							<div className='card-header'>Add Contact</div>
							<div className='card-body'>
								<form
									onSubmit={this.onSubmit.bind(
										this,
										dispatch
									)}
								>
									<TextInputGroup
										label='Name'
										name='name'
										placeholder='Enter Name'
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										label='Email'
										type='email'
										name='email'
										placeholder='Enter Email'
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										label='Phone'
										name='phone'
										placeholder='Enter Phone'
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input
										type='submit'
										className='btn btn-block btn-light'
										value='Add Contact'
									/>
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}
export default AddContact
