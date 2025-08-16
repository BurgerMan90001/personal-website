import { Router } from "express";
import * as indexRoutes from "../routes";

const router: Router = Router();

router.get('/', indexRoutes.getIndex); // home page

router.get('/projects', indexRoutes.getProjectsPage);

router.get('/contact', indexRoutes.getContactPage);

router.use(indexRoutes.getNotFoundPage); // when there is an invalid route, 404 error


export { router as indexController } ;