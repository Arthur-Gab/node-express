const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();
const port = 3939;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: false }));
// GET /style.css etc
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorController);

app.listen(port, () => {
	console.log(`Server running at ${port}`);
});
