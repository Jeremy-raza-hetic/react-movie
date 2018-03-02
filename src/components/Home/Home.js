import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {searchMovies} from "../../api/omdb";

import './Home.scss';
import Card from './../Card/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
	customWidth: {
		width: 200,
		marginLeft: 'auto',
		marginRight: '15px',
	},
	labelStyle: {
		color: 'white'
	}
};

class Home extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			filterValue: 1,
			windowWidth: 0,
		}
	}

	mostRecentMovies() {
		const movies = this.state.movies.sort((a, b) => {
			return a.year - b.year;
		});
		this.setState({
			movies
		})
	};

	async resetFilter() {
		const movies = await searchMovies({
			terms: "x-men",
			page: 1
		});

		this.setState({
			movies,
		})
	};

	handleChange = (event, index, value) => {
		this.setState({
			filterValue: value
		});
	};

	watchScroll() {
		this.setState({
			windowWidth: window.innerWidth
		})
	}

	// Hooks

	async componentDidMount() {
		const movies = await searchMovies({
			terms: "x-men",
			page: 1
		});

		this.setState({
			movies,
		});
		window.addEventListener('resize', this.watchScroll());
	}


	render() {
		return (
			<div
				className="home"
				ref={el => this.element = el}>
				<DropDownMenu
					value={this.state.filterValue}
					style={styles.customWidth}
					autoWidth={false}
					labelStyle={styles.labelStyle}
					onChange={this.handleChange}>
					<MenuItem value={1} primaryText="No filtered" onClick={() => this.resetFilter()}/>
					<MenuItem value={2} primaryText="Most recent" onClick={() => this.mostRecentMovies()}/>
				</DropDownMenu>
				<div className="home__container">
					{this.state.movies.map((movie, i) =>
						<Link to={`movie/${i}`} key={movie.imdb} className="home__link">
							<Card movie={movie} key={movie.imdb}/>
						</Link>
					)}
				</div>
			</div>
		)
	}
}

export default Home;