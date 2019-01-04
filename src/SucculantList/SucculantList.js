import React, { Component } from 'react'
import Succulant from '../Succulant/Succulant';
import './SucculantList.scss';
import { succulantData } from '../resources/succulatData'

export default class SucculantList extends Component {
	state = {
		succulants: succulantData
	}

	removeSucculant = (id) => {
		this.setState({
			succulants: this.state.succulants.filter(succulant => id !== succulant.id)
		});
	}
	render() {
		const { succulants } = this.state;

		return (
			<section className='succulantList'>
				{succulants.map(succulant => (
					<Succulant key={succulant.id} succulant={succulant} removeSucculant = {this.removeSucculant}/>
				))}
			</section>
		)
	}
}
