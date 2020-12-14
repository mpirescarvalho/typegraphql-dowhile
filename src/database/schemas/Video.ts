import mongoose, { Document } from "mongoose";
import Video from "../../graphql/video/Video";

const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Categories",
	},
});

export default mongoose.model<Omit<Video, "category"> & Document>(
	"Videos",
	Schema
);
