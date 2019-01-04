import React from 'react';
import './Navbar.scss';
import logo from '../../logo.PNG';

export default function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<img src={logo} alt="app logo" />
				<ul className="nav-links">
					<li>
						<a href="/" className="nav-link">home</a>
					</li>
					<li>
						<a href="/" className="nav-link">succulants</a>
					</li>
					<li>
						<a href="/" className="nav-link">contact</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
