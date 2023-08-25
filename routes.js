const fs = require("fs");

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === "/") {
		res.write(`
        <html>
            <head>
                <title>Entered Message</title>
            </head>
            <body>
                <h1>NodeJs</h1>
                <form action='/message' method='POST'>
                    <input type='text' name='message'>
                    <button type='submit'>Send</button>
                </form>
            </body>
        </html>
        `);
		return res.end();
	}
	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.slice(8);

			fs.writeFile("message.txt", message, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/");
				return res.end();
			});
		});
	}
	res.setHeader("content-type", "text/html");
	res.write(`
    <html>
        <head>
            <title>My First HTML with Nodejs</title>
        </head>
        <body>
            <h1>Hello from My NodeJs Server</h1>
        </body>
    </html>
    `);
	res.end();
};

module.exports = requestHandler;
