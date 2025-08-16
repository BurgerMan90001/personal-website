

import { Router } from "express";
import { TaskRoutes } from "../routes/tasksRoute";

const router = Router();
const taskRoutes = new TaskRoutes();

router.post('/', taskRoutes.createTask); // /tasks POST

router.get('/', taskRoutes.getAllTasks); // /tasks GET

router.get('/:id', taskRoutes.getTaskById); // /tasks:id GET

router.put('/:id', taskRoutes.updateTaskById); // /tasks:id PUT

router.delete('/:id', taskRoutes.deleteTaskById); // /tasks:id DELETE



const { log } = console;

export { router as tasksController };