var cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

let log = console.log;

app.get("/", (req, res) => {
	res.send("Your app works, cool!!");
	// res.status(201).send('If you want to send custom status code.');
});

app.listen(8080, function () {
	console.log("server running on 8080");
}); //the server object listens on port 8080
