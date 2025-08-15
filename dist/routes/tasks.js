"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let tasks = [];
// create task operation
router.post('/', (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
    };
    tasks.push(task);
    res.status(201).json(task);
    console.log("post");
});
// retrive all tasks operation
router.get('/', (req, res) => {
    res.json(tasks);
});
// read a single task
router.get('/:id', (req, res) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task) { // searches for the task by id
        res.status(404).send('Task not found');
    }
    else {
        res.json(task);
    }
});
// update a task by id
router.put('/:id', (req, res) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task) {
        res.status(404).send('Task not found');
    }
    else {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.completed = req.body.completed || task.completed;
        res.json(task);
    }
});
// delete a task by id
router.delete('/:id', (req, res) => {
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (index === -1) {
        res.status(404).send('Task not found');
    }
    else {
        tasks.splice(index, 1);
        res.status(204).send();
    }
});
exports.default = router;
