import jwt from "jsonwebtoken";
import crypto from "crypto";

export function generateAccessToken(payload) {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: process.env.ACCESS_TOKEN_LIFE,
	});
}

export function generateRefreshToken(payload) {
	return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: process.env.REFRESH_TOKEN_LIFE,
	});
}

export function generateRandomHash() {
	var current_date = new Date().valueOf().toString();
	var random = Math.random().toString();
	return crypto
		.createHash("sha1")
		.update(current_date + random)
		.digest("hex");
}
