import express from 'express'
import {Planner} from '../../../server.js'

const plannerRouter = express.Router()

plannerRouter.get("/", async(request, response, next)=> {
    try {
        const data = await Planner.findAll()
        response.send(data)
    } catch (error) {
        next(error)
    }
})
plannerRouter.post("/", async(request, response, next)=> {
    try {
        const newPlanner = await Planner.create(request.body)
        response.status(201).send(newPlanner)
    } catch (error) {
        console.log(error);
        next(error)
    }
})
plannerRouter.get("/:id", async(request, response, next)=> {
    try {
        const getById = await Planner.findByPk(request.params.id)
        if(getById){
            response.send(getById)
        }else{
            response
            .status(404)
            .send(`The prduct with an id of ${request.params.id} is not found`);
        }
    } catch (error) {
        next(error)
    }
})
plannerRouter.put("/:id", async(request, response, next)=> {
    try {
        const updatePlanner = await Planner.update(request.body, {
            where:{
                id: request.params.id
            },
            returning:true
        })
        response.send(updatePlanner.rows[1][0])
    } catch (error) {
        next(error)
    }
})
plannerRouter.delete("/:id", async(request, response, next)=> {
    try {
        const deletePlannetr = await Planner.destroy({
            where:{
                id:request.params.id
            }
        })
        if (deleteProduct > 0) {
            response.send(
              `The chosen Product with a specific Id ${request.params.id} is deleted`
            );
          }
    } catch (error) {
        next(error)
    }
})


export default plannerRouter