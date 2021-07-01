import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";

import "./css/main.sass";
import "react-toastify/dist/ReactToastify.css";
import RedirectComp from "./Components/RedirectComp";

class App extends React.Component {
	//TODO: Create Browser Id || https://www.npmjs.com/package/uuid-browser
	render() {
		return (
			<section className="app">
				<Router>
					<RedirectComp />
					<header>
						<Navbar
							collapseOnSelect
							expand="md"
							bg="dark"
							variant="dark"
							className="px-3"
						>
							<Navbar.Brand as={Link} to="/">
								<img
									className="header-logo"
									src="/favicon-logo/logo.png"
									alt=""
								/>
								<span className="ms-3">Video Chat App</span>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse
								className="justify-content-end"
								id="responsive-navbar-nav"
							>
								<Nav>
									<Nav.Link as={Link} to="/">
										Home
									</Nav.Link>
									<Nav.Link as={Link} to="/login">
										Sign In
									</Nav.Link>
									<Nav.Link as={Link} to="/register">
										Sign Up
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</header>

					<div className="container mt-4">
						<Switch>
							<Route
								name="home"
								path="/"
								exact
								component={Home}
							/>
							<Route
								name="login"
								path="/login"
								component={Login}
							/>
							<Route
								name="register"
								path="/register"
								component={Register}
							/>
						</Switch>
					</div>
					<footer className="text-light"></footer>
				</Router>
				<ToastContainer />
			</section>
		);
	}
}
export default App;
