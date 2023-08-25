const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();
const port = 3939;

app.use(express.urlencoded({ extended: false }));
// Permite qlqr solicitação de uso da pasta public em meus arquivos
// Sejam permitidas
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
	res.status(404);
	res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
	console.log(`Server running at ${port}`);
});
