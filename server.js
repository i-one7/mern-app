import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";

dotenv.config();
const app = express();
const config = {
	port: process.env.PORT,
	localhost: process.env.MONGODB_LOCAL,
	atlas: process.env.MONGODB_URI,
	dbase: process.env.DB_NAME,
};

mongoose.connect( config.atlas || config.localhost , {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const dbase = mongoose.connection;
dbase.on("error", (error) => console.error(error));
dbase.once("open", () => console.info("Database connected!"));

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(config.port, () => console.log(`Server running at port ${config.port}`));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
