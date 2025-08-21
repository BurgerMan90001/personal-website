

import { Router } from "express";
import { apiController } from "../controllers/apiController";


const router: Router = Router();

router.post('/', apiController.createTask); // /tasks POST

router.get('/', apiController.getAllTasks); // /tasks GET

router.get('/:id', apiController.getTaskById); // /tasks:id GET

router.put('/:id', apiController.updateTaskById); // /tasks:id PUT

router.delete('/:id', apiController.deleteTaskById); // /tasks:id DELETE

export { router as apiRoutes };
