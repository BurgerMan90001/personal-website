/*
controller interfaces
*/ 

declare module 'controllers' {
    import { Request, Response } from 'express';
    interface IndexController { // automatic exports
        getIndex(req: Request, res: Response): void;
        getProjectsPage(req: Request, res: Response): void;
        getContactPage(req: Request, res: Response): void;
        getNotFoundPage(req: Request, res:Response): void;
    }
    interface TaskController {
        createTask(req: Request, res: Response): void;
        getAllTasks(req: Request, res: Response): void;
        getTaskById(req: Request, res: Response): void;
        updateTaskById(req: Request, res: Response): void;
        deleteTaskById(req: Request, res: Response): void;
    }
}
