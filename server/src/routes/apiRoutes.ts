

import { Router } from "express";
import * as controller from "../controllers/apiController";


const router: Router = Router();

router.post('/', controller.createPoll); // /tasks POST

router.get('/', controller.getAllPolls); // /tasks GET

router.get('/:id', controller.getPollById); // /tasks:id GET

router.put('/:id', controller.updatePollById); // /tasks:id PUT

router.delete('/:id', controller.deletePollById); // /tasks:id DELETE

export { router as apiRoutes };
