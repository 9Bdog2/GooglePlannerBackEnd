import express from "express";
import listEndpoints from "express-list-endpoints";

const server = express();

const PORT = process.env.PORT || 3001;

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(listEndpoints(server));
});

server.on("error", (err) => {
  console.log(err, "Server has stopped !!!");
});
