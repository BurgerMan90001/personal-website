

import { Router } from "express";
import { TaskRoutes } from "../routes/tasks.route";

const router = Router();
const taskRoutes = new TaskRoutes();

router.post('/', taskRoutes.createTask);

router.get('/', taskRoutes.getAllTasks);

router.get('/:id', taskRoutes.getTaskById);

router.put('/:id', taskRoutes.updateTaskById);

router.delete('/:id', taskRoutes.deleteTaskById);

export { router as tasksController };