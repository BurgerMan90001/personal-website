
import { Request, Response } from 'express';
import { Task } from '../models/task';

let tasks : Task[] = [];

function createTask(req: Request, res: Response) : void {
    const task: Task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
    };

    tasks.push(task);
    res.status(201).json(task);
    console.log("post");
}

// read all tasks
function getAllTasks(req: Request, res: Response) : void {

    console.log(res.constructor.name);

    if (tasks.length === 0) {
        res.status(404).send('No tasks found');
    } else {
        
        res.json(tasks);
    }
}

// read a task by id
function getTaskById(req: Request, res: Response) : void {
    console.log("get by id");
    const task = findTaskById(req.params.id);

    if (!task) { // searches for the task by id
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
}

// update a task by id
function updateTaskById(req: Request, res: Response) : void {
    console.log("update by id");
    const task = findTaskById(req.params.id);

    if (!task) {
        res.status(404).send('Task not found');
    } else {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.completed = req.body.completed || task.completed;

        res.json(task);
    }
}

function deleteTaskById(req: Request, res: Response) {
    console.log("delete by id");
    const index = findTaskIndexById(req.params.id);

    if (index === -1) {
        res.status(404).send('Task not found');
    } else {
        tasks.splice(index, 1);
        res.status(204).send();
    }
}

function findTaskIndexById(id: string) : number {
    return tasks.findIndex((task) => task.id === parseInt(id));
}
function findTaskById(id: string) : Task | undefined {
    return tasks.find((t) => t.id === parseInt(id));
}

export const taskOperations = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
}
