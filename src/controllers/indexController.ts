
import { Router, Request, Response} from "express";
import { getProjectsPage, getContactPage, getNotFoundPage, getIndex } from "../routes/indexRoute";

const router = Router();

router.get('/projects', getProjectsPage);

router.get('/contact', getContactPage);

router.use(getNotFoundPage); // when there is an invalid route


export { router as indexController };