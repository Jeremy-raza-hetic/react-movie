import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {

	render() {
		const { movie } = this.props;
		return (
			<div className="card">
				<img className="card__img" src={movie.poster} alt=""/>
			</div>
		)
	}
}

export default Card;