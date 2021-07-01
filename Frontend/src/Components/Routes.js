import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";

export default function Routes() {
	return (
		<Switch>
			<Route name="home" path="/" exact component={Home} />
			<Route name="login" path="/login" component={Login} />
			<Route name="register" path="/register" component={Register} />
		</Switch>
	);
}

// FIXME:: NOTE: This Not Used
