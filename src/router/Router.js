import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home/Home";

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/home" component={Home} />
	</Switch>
);

export default Router;
