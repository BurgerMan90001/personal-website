"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
class TaskRoutes {
    constructor() {
        this.tasks = [];
    }
    createTask(res, req) {
        const task = {
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
    getAllTasks(res, req) {
        res.json(this.tasks);
    }
    // read a task by id
    getTaskById(res, req) {
        const task = this.findTaskById(req.params.id);
        if (!task) { // searches for the task by id
            res.status(404).send('Task not found');
        }
        else {
            res.json(task);
        }
    }
    // update a task by id
    updateTaskById(res, req) {
        const task = this.findTaskById(req.params.id);
        if (!task) {
            res.status(404).send('Task not found');
        }
        else {
            task.title = req.body.title || task.title;
            task.description = req.body.description || task.description;
            task.completed = req.body.completed || task.completed;
            res.json(task);
        }
    }
    deleteTaskById(res, req) {
        const index = this.findTaskIndexById(req.params.id);
        if (index === -1) {
            res.status(404).send('Task not found');
        }
        else {
            this.tasks.splice(index, 1);
            res.status(204).send();
        }
    }
    findTaskIndexById(id) {
        return this.tasks.findIndex((task) => task.id === parseInt(id));
    }
    findTaskById(id) {
        return this.tasks.find((t) => t.id === parseInt(id));
    }
}
exports.TaskRoutes = TaskRoutes;
