import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { formSubmit } from "../Helper";

class Register extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<h4 className="text-center">Register</h4>
						<Form
							onSubmit={formSubmit}
							method="POST"
							data-success-redirect-url="/"
							action={
								window.env.API_URL +
								":" +
								window.env.API_PORT +
								"/api/user/register"
							}
						>
							<Form.Group
								controlId="registerNameSurname"
								className="mt-3"
							>
								<Form.Control
									type="text"
									placeholder="Enter Your Name"
									name="name_surname"
								/>
							</Form.Group>
							<Form.Group
								controlId="registerEmail"
								className="mt-3"
							>
								<Form.Control
									type="email"
									placeholder="Enter Email"
									name="email"
								/>
							</Form.Group>
							<Form.Group
								controlId="registerPassword"
								className="mt-3"
							>
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
								/>
							</Form.Group>
							<Form.Group
								controlId="registerSubmit"
								className="mt-3"
							>
								<Button
									variant="success"
									type="submit"
									className="w-100"
								>
									Register
								</Button>
							</Form.Group>
							<Form.Group
								controlId="registerSubmit"
								className="mt-3 text-end pe-1"
							>
								<Link
									className="text-white text-decoration-none"
									to="/login"
								>
									Login
								</Link>
							</Form.Group>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}
export default Register;
