import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 justify-content-center text-center">
						<Image
							className="img-fluid"
							src="/images/home.png"
						></Image>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-md-12 text-center">
						<h4>Get Started</h4>
						<p>Register Now Your Friends Start Talking Now</p>
						<Button
							className="d-block"
							variant="success"
							to="login"
							as={Link}
						>
							Sign In Now
						</Button>
						<Button
							className="d-block mt-3"
							variant="primary"
							to="register"
							as={Link}
						>
							Sign Up Now
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
