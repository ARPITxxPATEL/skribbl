const express = require("express");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const socketConnection = require("./services/socketConnectionService");

API_PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
socketConnection.init(server);

server.listen(API_PORT, () => {
  console.log(`Server running on port ${API_PORT}`);
});
