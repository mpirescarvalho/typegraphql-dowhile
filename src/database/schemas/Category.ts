import mongoose, { Document } from "mongoose";
import Category from "../../graphql/category/Category";

const Schema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

export default mongoose.model<Category & Document>("Categories", Schema);
