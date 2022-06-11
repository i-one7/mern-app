import mongoose from "mongoose";

const Activity = mongoose.Schema({
	judul: {
		type: String,
		required: true,
	},
	catatan: {
		type: String,
		required: false,
	},
});

export default mongoose.model("Activity", Activity);
