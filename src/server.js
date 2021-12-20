import express from "express";
import listEndpoints from "express-list-endpoints";
import sequelize, {testConnection} from "./db/connect.js";
import cors from "cors";
import taskRouter from "./db/services/task/index.js";
import plannerRouter from './db/services/planner/index.js'

const server = express();
const PORT = process.env.PORT || 3001;

import Planner from './db/models/planner.js'
import Task from './db/models/task.js'

// ***************************** TABLE RELATIONS *****************
Planner.hasMany(Task, { onDelete: "CASCADE" });
Task.belongsTo(Planner, { onDelete: "CASCADE" });

export {Planner, Task}

// ***************************** END OF TABLE RELATIONS *****************


// ************************* START OF ROUTERS **************************
  server.use(cors(corsOptions))
  server.use(express.json())
  server.use("/planners", plannerRouter)
  server.use("/tasks", taskRouter)

  // ************************* END OF ROUTERS **************************


server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(listEndpoints(server));
  await testConnection();
  await sequelize.sync()
});

server.on("error", (err) => {
  console.log(err, "Server has stopped !!!");
});
