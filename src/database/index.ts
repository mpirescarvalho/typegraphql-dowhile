import "dotenv/config";
import mongoose from "mongoose";

if (!process.env.MONGO_URL) {
	throw new Error("Missing MONGO_URL env variable");
}

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
