import express from "express";
import listEndpoints from "express-list-endpoints";
import { testConnection, connectDB } from "./db/connect.js";
import cors from "cors";
import taskRouter from "./db/services/task/index.js";

const server = express();

const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(cors());

server.use("/tasks", taskRouter);

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(listEndpoints(server));
  await testConnection();
  await connectDB();
});

server.on("error", (err) => {
  console.log(err, "Server has stopped !!!");
});
