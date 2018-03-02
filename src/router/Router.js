import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home/Home";
import Panel from '../components/Panel/Panel';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/movie/:i" component={Panel} />
	</Switch>
);

export default Router;
