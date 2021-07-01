import Mongo from "./Mongo.js";

let userSchema = new Mongo.Schema(
	{
		nameSurname: {
			type: String,
			required: { required: true },
		},
		email: {
			type: String,
			required: { required: true },
		},
		password: {
			type: String,
			required: { required: true },
		},
		sessionToken: {
			type: String,
			required: { required: true },
		},
	},
	{
		collection: "users",
		versionKey: false,
	}
);

const User = Mongo.model("users", userSchema);

export default User;
