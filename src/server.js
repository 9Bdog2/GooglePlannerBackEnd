import express from "express";
import listEndpoints from "express-list-endpoints";
import { testConnection, connectDB } from "./db/connect.js";
import cors from "cors";
import taskRouter from "./db/services/task/index.js";
import plannerRouter from './db/services/planner/index.js'




const server = express();

const PORT = process.env.PORT || 3001;

import Planner from './db/models/planner.js'
// ***************************** TABLE RELATIONS *****************
// Planner.hasMany(Task, { onDelete: "CASCADE" });
// Task.belongsTo(Planner, { onDelete: "CASCADE" });

export {Planner}

// ***************************** END OF TABLE RELATIONS *****************


// ************************* START OF ROUTERS **************************
  server.use(express.json())
  server.use("/planners", plannerRouter)

  // ************************* END OF ROUTERS **************************


server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(listEndpoints(server));
  await testConnection();
  await connectDB();
});

server.on("error", (err) => {
  console.log(err, "Server has stopped !!!");
});
