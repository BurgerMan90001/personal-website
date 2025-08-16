
import { Request, Response } from 'express';
// MAYBE USE A VIEW ENGINE
export function getProjectsPage(req: Request, res: Response): void {

    res.sendFile('projects.html', { root : 'public' });

}

export function getContactPage(req: Request, res: Response): void {

    res.sendFile('contact.html', { root : 'public' });

}