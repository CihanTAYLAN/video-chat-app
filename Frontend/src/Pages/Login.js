import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { formSubmit } from "../Helper";

class Login extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<h4 className="text-center">Login</h4>
						<Form
							onSubmit={formSubmit}
							method="POST"
							data-success-redirect-url="/"
							action={
								window.env.API_URL +
								":" +
								window.env.API_PORT +
								"/api/user/login"
							}
						>
							<Form.Group controlId="loginEmail" className="mt-3">
								<Form.Control
									type="email"
									name="email"
									placeholder="Enter Email"
								/>
							</Form.Group>
							<Form.Group
								controlId="loginPassword"
								className="mt-3"
							>
								<Form.Control
									type="password"
									name="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Form.Group
								controlId="loginSubmit"
								className="mt-3"
							>
								<Button
									variant="success"
									type="submit"
									className="w-100"
								>
									Login
								</Button>
							</Form.Group>
							<Form.Group
								controlId="loginSubmit"
								className="mt-3 text-end pe-1"
							>
								<Link
									className="text-white text-decoration-none"
									to="/register"
								>
									Register
								</Link>
							</Form.Group>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;
