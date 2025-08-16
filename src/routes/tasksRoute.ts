
import { Request, Response, Router } from 'express';
import { Task } from '../models/task';

class TaskRoutes {

    public tasks : Task[] = [];

    public constructor() {
        console.log("TaskRoutes initialized");
    }
    

    public createTask(res: Response, req: Request) : void {
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
    public getAllTasks(res: Response, req: Request) : void {
        console.log("get all");
        
        if (this.tasks == undefined) {
            res.status(404).send('No tasks found');
        }
        if (this.tasks.length === 0) {
            res.status(404).send('No tasks found');
        } else {
         //   res.json(this.tasks);
        }
        
    }

    // read a task by id
    public getTaskById(res: Response, req: Request) : void {
        console.log("get by id");
        const task = this.findTaskById(req.params.id);

        if (!task) { // searches for the task by id
            res.status(404).send('Task not found');
        } else {
            res.json(task);
        }
    }

    // update a task by id
    public updateTaskById(res: Response, req: Request) : void {
        console.log("update by id");
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
        console.log("delete by id");
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