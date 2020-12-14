import { Field, ObjectType } from "type-graphql";
import Category from "../category/Category";

@ObjectType()
class Video {
	@Field()
	_id: string;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field(() => Category)
	category: Category;
}

export default Video;
