import express from "express";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import Routes from "./Routes/Router.js";
const Router = express.Router();

// FIXME: Pages
Router.get("/", (req, res) => {
	res.send("<pre>Video Call Chat App Server By CT</pre>" + req.session.id);
});
// Pages

class App {
	constructor(app) {
		this.app = app;
	}

	run() {
		if (process.env.NODE_ENV === "production") {
			this.app.set("trust proxy", 1); // trust first proxy
			sess.cookie.secure = true; // serve secure cookies
		}
		this.app.use(
			session({
				secret: process.env.SESSION_TOKEN,
				resave: true,
				saveUninitialized: true,
				cookie: {
					maxAge: Number(process.env.SESSION_OUT_TIME),
					sameSite: true,
				},
				genid: uuidv4, // use UUIDs for session IDs
			})
		);
		this.app.use((req, res, next) => {
			const allowedOrigins = [
				"http://127.0.0.1:3000",
				"http://localhost:3000",
				"http://192.168.1.102:3000",
			];
			const origin = req.headers.origin;
			if (allowedOrigins.includes(origin)) {
				res.setHeader("Access-Control-Allow-Origin", origin);
			}
			// res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-Type", "application/json; charset=utf-8");
			res.setHeader(
				"Access-Control-Allow-Methods",
				"GET, POST, PUT, DELETE"
			);
			res.header(
				"Access-Control-Allow-Headers",
				"Content-Type, Authorization"
			);
			this.app.disable("x-powered-by");
			res.header("Access-Control-Allow-Credentials", true);
			console.log("REQUEST > " + req.originalUrl);
			return next();
		});

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.buildRoutes();
	}

	buildRoutes() {
		Object.keys(Routes.api.get).forEach(function (route) {
			Router.get(
				route,
				Routes.api.get[route].middleware
					? Routes.api.get[route].middleware
					: (req, res, next) => {
							next();
					  },
				Routes.api.get[route].target
			);
		});
		Object.keys(Routes.api.post).forEach(function (route) {
			Router.post(
				route,
				Routes.api.post[route].middleware !== undefined
					? Routes.api.post[route].middleware
					: (req, res, next) => {
							next();
					  },
				Routes.api.post[route].target
			);
		});
		Object.keys(Routes.api.put).forEach(function (route) {
			Router.put(
				route,
				Routes.api.put[route].middleware
					? Routes.api.put[route].middleware
					: (req, res, next) => {
							next();
					  },
				Routes.api.put[route].target
			);
		});
		Object.keys(Routes.api.delete).forEach(function (route) {
			Router.delete(
				route,
				Routes.api.delete[route].middleware
					? Routes.api.delete[route].middleware
					: (req, res, next) => {
							next();
					  },
				Routes.api.delete[route].target
			);
		});
		this.app.use("/", Router);
	}
}

export default App;
