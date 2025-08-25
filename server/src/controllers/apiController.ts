//import type { Task } from '../models/Task.ts'
import type { Request, Response } from 'express'
import type { ApiController } from './controllers.ts'


// database search functions
/*
function findTaskIndexById(id: string): number {

  //return tasks.findIndex((task) => task.id === parseInt(id))
}
function findTaskById(id: string): Task | undefined {

  //return tasks.find((t) => t.id === parseInt(id))
}
*/
export const apiController: ApiController = {
  createTask(req: Request, res: Response): void {
    /*
    const task: Task = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    }

    tasks.push(task)
    res.status(201).json(task)
    */

  },

  getAllTasks(req: Request, res: Response): void {
    console.log();
    //console.log(res.constructor.name)

    /*
    if (tasks.length === 0) {
      res.status(404).send('No tasks found')
    } else {
      res.json(tasks)
    }
    */
  },
  getTaskById(req: Request, res: Response): void {

    /*
    const task = findTaskById(req.params.id)

    if (!task) {
      // searches for the task by id
      res.status(404).send('Task not found')
    } else {
      res.json(task)
    }
      */
  },
  updateTaskById(req: Request, res: Response): void {

    /*
    const task = findTaskById(req.params.id)

    if (!task) {
      res.status(404).send('Task not found')
    } else {
      task.title = req.body.title || task.title
      task.description = req.body.description || task.description
      task.completed = req.body.completed || task.completed

      res.json(task)
    }
      */
  },

  deleteTaskById(req: Request, res: Response) {
    /*
    console.log('delete by id')
    const index = findTaskIndexById(req.params.id)

    if (index === -1) {
      res.status(404).send('Task not found')
    } else {
      tasks.splice(index, 1)
      res.status(204).send()
    }
      */
  },
}
