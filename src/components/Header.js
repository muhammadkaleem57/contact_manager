import React from 'react'

const Header = props => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
			<div className='container'>
				<a className='navbar-brand' href='ff'>
					{props.branding}
				</a>
				<div>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<a href='/home' className='nav-link'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a href='aa' className='nav-link'>
								Link 2
							</a>
						</li>
						<li className='nav-item'>
							<a href='aa' className='nav-link'>
								Link 3
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
