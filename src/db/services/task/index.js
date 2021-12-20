import express from "express";
import {Task} from "../../../server.js"; 
import Op from "sequelize";

const taskRouter = express.Router();

/* 
GET /task
returns ONLY tasks who are not marked as done yet

POST /task
creates a new task and returns it

PUT /task/:id
edits the selected task and returns an updated list of tasks (not marked as done)

DELETE /task/:id
deleted the selected task
*/

taskRouter
  .get("/", async (req, res, next) => {
    try {
      const tasks = await models.Task.findAll({
        where: {
          done: false,
        },
      });
      res.status(201).send(tasks);
    } catch (error) {
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const task = await models.Task.create(req.body);
      res.status(201).send(task);
    } catch (error) {
      next(error);
    }
  })
  .put("/:id", async (req, res, next) => {
    try {
      const task = await models.Task.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(201).send(task);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const task = await models.Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).send(task);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const tasks = await models.Task.findAll({
        where: {
          id: req.params.id,
          done: false,
        },
      });
      res.status(201).send(tasks);
    } catch (error) {
      next(error);
    }
  });

export default taskRouter;
