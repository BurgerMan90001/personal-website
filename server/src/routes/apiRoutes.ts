

import { Router } from "express";
import * as controller from "../controllers/apiController.ts";


const router: Router = Router();

router.post('/', controller.create); // /tasks POST
//apiController.createTask
router.get('/', controller.getAllSongs); // /tasks GET
// apiController.getAllTasks
router.get('/:id', controller.getSongById); // /tasks:id GET

router.put('/:id', controller.updateSongById); // /tasks:id PUT

router.delete('/:id', controller.deleteSongById); // /tasks:id DELETE

export { router as apiRoutes };
