
import { Router, Request, Response } from 'express';
import { Task } from '../models/task';

const router = Router();
let tasks: Task[] = [];

// create task operation
router.post('/', (req: Request, res: Response) => {
    const task: Task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
    };

    tasks.push(task);
    res.status(201).json(task);
    console.log("post")
});

// retrive all tasks operation
router.get('/', (req: Request, res: Response) => {
    res.json(tasks);
});


// read a single task
router.get('/:id', (req: Request, res: Response) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));

    if (!task) { // searches for the task by id
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
});

// update a task by id
router.put('/:id', (req: Request, res: Response) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));

    if (!task) {
        res.status(404).send('Task not found');
    } else {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.completed = req.body.completed || task.completed;

        res.json(task);
    }
});

// delete a task by id
router.delete('/:id', (req: Request, res: Response) => {
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

    if (index === -1) {
        res.status(404).send('Task not found');
    } else {
        tasks.splice(index, 1);
        res.status(204).send();
    }
});

export default router;
