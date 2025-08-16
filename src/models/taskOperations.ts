import { Request, Response } from 'express';

// MAYBE EXPAND
// REQ RES
export interface TaskOperations {
    createTask(req: Request, res: Response) : void;
    getAllTasks(req: Request, res: Response) : void;
    getTaskById(req: Request, res: Response) : void;
    updateTaskById(req: Request, res: Response) : void;
    deleteTaskById(req: Request, res: Response) : void;  
}