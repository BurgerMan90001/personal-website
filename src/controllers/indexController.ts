
import { Router } from "express";
import { getProjectsPage, getContactPage } from "../routes/indexRoute";

const router = Router();

router.get('/projects', getProjectsPage);

router.get('/contact', getContactPage)


export { router as indexController };