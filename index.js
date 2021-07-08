// starts the server seperately from backend on port 3000
const server = require("./app.js");
const port = process.env.PORT;

server.listen(port, () => console.log("Starting up the server"));