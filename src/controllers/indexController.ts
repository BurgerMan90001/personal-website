
import { Router } from "express";
import { getProjectsPage, getContactPage, getNotFoundPage } from "../routes/indexRoute";

const router = Router();

router.get('/projects', getProjectsPage);

router.get('/contact', getContactPage);

//router.all('*', getNotFoundPage);


export { router as indexController };