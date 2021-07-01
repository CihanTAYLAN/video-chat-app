import { find } from "../Controllers/UserController.js";
import {
	login,
	register,
	controlAuth,
	logout,
} from "../Controllers/UserAuthController.js";
import jwtApiAuth from "../Middleware/jwtApiAuth.js";

const Routes = {
	web: {
		get: {},
		post: {},
	},
	api: {
		get: {
			"/api/user/find": {
				target: find,
				middleware: jwtApiAuth,
			},
		},
		post: {
			"/api/user/register": {
				target: register,
			},
			"/api/user/login": {
				target: login,
			},
			"/api/user/controlLogin": {
				target: controlAuth,
				middleware: jwtApiAuth,
			},
			"/api/user/logout": {
				target: logout,
				middleware: jwtApiAuth,
			},
		},
		put: {},
		delete: {},
	},
};
export default Routes;
