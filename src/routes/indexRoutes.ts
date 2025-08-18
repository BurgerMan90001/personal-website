

import { Router } from "express";
import { indexController } from "../controllers";

const router: Router = Router();

router.get('/', indexController.getIndex); // home page

router.get('/projects', indexController.getProjectsPage);

router.get('/contact', indexController.getContactPage);

router.use(indexController.getNotFoundPage); // when there is an invalid route, 404 error


export { router as indexRoutes };