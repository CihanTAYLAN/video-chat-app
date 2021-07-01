import "./App/config.js";
import express from "express";
import App from "./App/App.js";

const app = express();
const port = process.env.APP_PORT;

app.listen(port, () => {
	console.log(
		`SERVER: Running At ------------------------------------------ http://localhost:${port}`
	);
});

var ThisApp = new App(app);
ThisApp.run();
