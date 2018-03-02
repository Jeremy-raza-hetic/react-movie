import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class header extends Component {
	render() {
		return (
			<div className="header">
				<header className="header-header">
					<img src={logo} className="header-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default header;
