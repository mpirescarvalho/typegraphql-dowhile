import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Video from "./Video";
import Crypto from "crypto";

const videos: Video[] = [];

@InputType()
class VideoInput {
	@Field()
	description: string;
	@Field()
	name: string;
	@Field()
	category: string;
}
@Resolver(Video)
class VideoResolver {
	@Query(() => [Video])
	async videos() {
		return videos;
	}

	@Mutation(() => Video)
	async createVideos(@Arg("videoInput") videoInput: VideoInput) {
		const id = Crypto.randomBytes(48).toString("hex");

		const video = {
			...videoInput,
			_id: id,
		};

		videos.push(video);
		return video;
	}
}

export default VideoResolver;
