
import { Router } from "express";
import { getProjectsPage, getContactPage, getNotFoundPage } from "../routes/indexRoute";

const router: Router = Router();

router.get('/projects', getProjectsPage);

router.get('/contact', getContactPage);

router.use(getNotFoundPage); // when there is an invalid route




export { router as indexController };