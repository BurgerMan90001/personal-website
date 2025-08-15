
import { Request, Response } from 'express';
import { Task } from '../models/task';

class TaskRoutes {

    public readonly tasks : Task[] = [];
    
    public createTask(res: Response, req: Request) {
        const task: Task = {
            id: this.tasks.length + 1,
            title: req.body.title,
            description: req.body.description,
            completed: false,
        };

        this.tasks.push(task);
        res.status(201).json(task);
        console.log("post");
    }

    // read all tasks
    public getAllTasks(res: Response, req: Request) {
        res.json(this.tasks);
    }

    // read a task by id
    public getTaskById(res: Response, req: Request) {
        const task = this.findTaskById(req.params.id);

        if (!task) { // searches for the task by id
            res.status(404).send('Task not found');
        } else {
            res.json(task);
        }
    }

    // update a task by id
    public updateTaskById(res: Response, req: Request) {
        const task = this.findTaskById(req.params.id);

        if (!task) {
            res.status(404).send('Task not found');
        } else {
            task.title = req.body.title || task.title;
            task.description = req.body.description || task.description;
            task.completed = req.body.completed || task.completed;

            res.json(task);
        }
    }

    public deleteTaskById(res: Response, req: Request) {
        const index = this.findTaskIndexById(req.params.id);

        if (index === -1) {
            res.status(404).send('Task not found');
        } else {
            this.tasks.splice(index, 1);
            res.status(204).send();
        }
    }
    private findTaskIndexById(id: string) : number {
        return this.tasks.findIndex((task) => task.id === parseInt(id));
    }
    private findTaskById(id: string) : Task | undefined {
        return this.tasks.find((t) => t.id === parseInt(id));
    }
}

export { TaskRoutes };
