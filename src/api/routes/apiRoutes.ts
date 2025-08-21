

import { Router } from "express";
import { taskController } from "../controllers/apiController";


const router: Router = Router();

router.post('/', taskController.createTask); // /tasks POST

router.get('/', taskController.getAllTasks); // /tasks GET

router.get('/:id', taskController.getTaskById); // /tasks:id GET

router.put('/:id', taskController.updateTaskById); // /tasks:id PUT

router.delete('/:id', taskController.deleteTaskById); // /tasks:id DELETE

export default router;
