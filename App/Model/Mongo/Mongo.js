import mongoose from "mongoose";
mongoose.connect(
	"mongodb://" +
		process.env.MONGO_USERNAME +
		":" +
		process.env.MONGO_PASSWORD +
		"@" +
		process.env.MONGO_HOST +
		":" +
		process.env.MONGO_PORT +
		"/" +
		process.env.MONGO_DB_NAME +
		"?authSource=" +
		process.env.MONGO_AUTHSOURCE,
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
const MongoDb = mongoose.connection;

MongoDb.on("error", console.error.bind(console, "connection error:"));
MongoDb.once("open", function () {
	console.log("Mongo Db Connect");
});

const Mongo = mongoose;

export default Mongo;
