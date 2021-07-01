import jwt from "jsonwebtoken";
import {
	generateRefreshToken,
	generateAccessToken,
	generateRandomHash,
} from "../Helper.js";
import User from "../Model/Mongo/User.js";

export async function login(req, res) {
	var doc = {
		email: req.body.email,
		password: req.body.password,
	};
	if (!doc.email || !doc.email.length) {
		return res
			.json({
				status: "warning",
				title: "Warning",
				message: "Email Can't be empty",
			})
			.end();
	}
	if (!doc.password || !doc.password.length) {
		return res
			.json({
				status: "warning",
				title: "Warning",
				message: "Password Can't be empty",
			})
			.end();
	}

	User.find({ email: doc.email, password: doc.password }, (err, user) => {
		if (err) {
			return res
				.json({
					status: "warning",
					title: "warning",
					message: "Wrong E-Mail Or Password",
				})
				.end();
		} else {
			if (user.length) {
				let payload = {
					email: user.email,
					sessionToken: user.sessionToken,
				};
				let accessToken = generateAccessToken(payload);
				let refreshToken = generateRefreshToken(payload);

				//store the refresh token in the user array
				// users[username].refreshToken = refreshToken;
				res.cookie("jwt", accessToken, {
					secure: true,
					httpOnly: true,
				});
				res.cookie("jwt-refresh", refreshToken, {
					secure: true,
					httpOnly: true,
				});
				return res
					.setHeader("token", accessToken)
					.json({
						status: "success",
						title: "success",
						message: "Login Successful",
					})
					.end();
			} else {
				return res
					.json({
						status: "warning",
						title: "warning",
						message: "Wrong E-Mail Or Password",
					})
					.end();
			}
		}
	});
}

export async function register(req, res) {
	var doc = {
		nameSurname: req.body.name_surname,
		email: req.body.email,
		password: req.body.password,
		sessionToken: generateRandomHash(),
	};
	if (!doc.nameSurname || !doc.nameSurname.length) {
		res.json({
			status: "warning",
			title: "Warning",
			message: "Name Surname Can't be empty",
		});
		return res.end();
	}
	if (!doc.email || !doc.email.length) {
		res.json({
			status: "warning",
			title: "Warning",
			message: "Email Can't be empty",
		});
		return res.end();
	}
	if (!doc.password || !doc.password.length) {
		res.json({
			status: "warning",
			title: "Warning",
			message: "Password Can't be empty",
		});
		return res.end();
	}

	var user = new User({
		nameSurname: doc.nameSurname,
		email: doc.email,
		password: doc.password,
		sessionToken: doc.sessionToken,
	});

	user.save((err, user) => {
		if (err) {
			res.json({
				status: "error",
				title: "error",
				message: "Registration Failed",
			}).end();
		} else {
			res.json({
				status: "success",
				title: "success",
				message: "Registration Successful",
			}).end();
		}
	});
}
export function controlAuth(req, res) {
	res.json({ auth: true }).end();
}
export function logout(req, res) {
	var token = req.headers["authorization"];
	res.setHeader(
		"Set-Cookie",
		"jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;jwt-refresh=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
	);
	res.json({ token: token }).end();
}
