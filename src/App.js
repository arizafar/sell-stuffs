import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import SucculantList from './SucculantList/SucculantList'
import './App.scss';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<SucculantList />
			</div>
		);
	}
}

export default App;