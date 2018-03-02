import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header/Header';
import Router from './router/Router';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MuiThemeProvider>
					<div className="App">
						<Header/>
						<Router/>
					</div>
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default App;
