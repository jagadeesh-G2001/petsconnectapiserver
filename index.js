const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;  // Make sure PORT is correctly named

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {  // Use PORT instead of port
  console.log(`JSON Server is running on port ` + PORT);
});
