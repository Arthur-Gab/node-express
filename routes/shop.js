const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const Router = express.Router();

// / => GET
Router.get("/", (req, res, next) => {
	console.log("In '/' path");
	res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = Router;
