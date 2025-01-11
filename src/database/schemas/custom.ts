import { Schema, model } from "mongoose";

const CustomResponses = new Schema({
	guildId: String,
	responses: [
		{
			id: String,
			keyword: String,
			reaction: String,
			messages: [String],
			createdBy: String,
		},
	],
});

export const custom = model("custom", CustomResponses);
