const http = require("http");
const routes = require("./routes");

const port = 3939;

const server = http.createServer(routes);

server.listen(port, () => {
	console.log("Server running at port 3939");
});
