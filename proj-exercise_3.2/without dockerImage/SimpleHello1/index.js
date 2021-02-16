var cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./static"));

let log = console.log;

const PORT = process.env.PORT || 80;

app.listen(PORT, function () {
	console.log("server running on", PORT);
}); //the server object listens on port PORT
