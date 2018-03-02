import React, {Component} from 'react';
import { searchMovies, getMovie} from "../../api/omdb";

import './Panel.scss';

class Panel extends Component {
	constructor() {
		super();
		this.state = {
			movie: {}
		}
	}


	async componentWillMount() {
		const movies = await searchMovies({
			terms: "x-men",
			page: 1
		});
		const movie = movies.length > 0 ? await getMovie(movies[this.props.match.params.i].imdb) : [];

		this.setState({
			movie,
		})
	}

	render() {
		const { title, poster, plot, writers, actors } = this.state.movie;
		return (
			<div className="panel">
				<div className="panel__container">
					<p>{title}</p>
					<img className="panel__img" src={poster} alt="poster"/>
					<p>{plot}</p>
					<p>Actors: {actors}</p>
					<p>Writers: {writers}</p>
				</div>
			</div>
		)
	}
}

export default Panel;