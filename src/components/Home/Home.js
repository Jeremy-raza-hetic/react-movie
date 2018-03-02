import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from './../Card/Card';
import {searchMovies} from "../../api/omdb";

import './Home.scss';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			movies: []
		}
	}

	async componentDidMount() {
		const movies = await searchMovies({
			terms: "x-men",
			page: 1
		});
		this.setState({
			movies,
		})
	}

	render() {
		return (
			<div className="home">
				{this.state.movies.map((movie, i) =>
					<Link to={`movie/${movie.imdb}`} className="home__link">
						<Card movie={movie} key={movie.imdb}/>
					</Link>
				)}
			</div>
		)
	}
}

export default Home;