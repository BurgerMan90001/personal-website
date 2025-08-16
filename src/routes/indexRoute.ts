
import express, { Request, Response } from 'express';
import path from 'path';



// MAYBE USE A VIEW ENGINE
export function getIndex(req: Request, res: Response): void  {
    res.sendFile('index.html', { root : 'public' });

}
export function getProjectsPage(req: Request, res: Response): void {

    res.sendFile('projects.html', { root : 'public' });

}

export function getContactPage(req: Request, res: Response): void {

    res.sendFile('contact.html', { root : 'public' });

}
// TODO ADD ACTUAL NOT FOUND PAGE
export function getNotFoundPage(req: Request, res:Response) {
    res.sendFile('404.html', { root : 'public' });

}
