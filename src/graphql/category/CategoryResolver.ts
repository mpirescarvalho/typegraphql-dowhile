import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Category from "./Category";
import Crypto from "crypto";

const categories: Category[] = [];

@InputType()
class CategoryInput {
	@Field()
	description: string;
	@Field()
	name: string;
}

@Resolver(Category)
class CategoryResolver {
	@Query(() => [Category])
	async categories() {
		return categories;
	}

	@Mutation(() => Category)
	async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
		const id = Crypto.randomBytes(48).toString("hex");

		const category = {
			...categoryInput,
			_id: id,
		};

		categories.push(category);
		return category;
	}
}

export default CategoryResolver;
