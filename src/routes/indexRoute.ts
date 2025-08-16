
import { Request, Response } from 'express';
// MAYBE USE A VIEW ENGINE
export function getProjectsPage(req: Request, res: Response): void {

    res.sendFile('projects.html', { root : 'public' });

}

export function getContactPage(req: Request, res: Response): void {

    res.sendFile('contact.html', { root : 'public' });

}
// TODO ADD ACTUAL NOT FOUND PAGE
export function getNotFoundPage(req: Request, res:Response) {
    res.status(404).send('<h1>404! Page not found</h1>');
}
