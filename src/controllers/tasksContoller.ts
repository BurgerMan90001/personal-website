import { Router } from "express";
import { taskOperations } from "../routes/tasksRoute";

const router = Router();

router.post('/', taskOperations.createTask); // /tasks POST

router.get('/', taskOperations.getAllTasks); // /tasks GET

router.get('/:id', taskOperations.getTaskById); // /tasks:id GET

router.put('/:id', taskOperations.updateTaskById); // /tasks:id PUT

router.delete('/:id', taskOperations.deleteTaskById); // /tasks:id DELETE


export default { router };