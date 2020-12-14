import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import CategoryResolver from "./graphql/category/CategoryResolver";
import VideoResolver from "./graphql/video/VideoResolver";
const PORT = 3333;

async function bootstrap() {
	const schema = await buildSchema({
		resolvers: [CategoryResolver, VideoResolver],
	});

	const server = new ApolloServer({ schema });

	server.listen({ port: PORT }, () => console.log(`Running at ${PORT}`));
}

bootstrap();
