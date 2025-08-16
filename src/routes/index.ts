
import { Request, Response } from 'express';
import { ResponseData } from 'models';
import path from 'path';

/*
const fileFinder = {
    prefix: '',
    getFullPatha(fileName: string): string {
        return path.join(prefix, fileName);
    }
}
*/
const prefix: string = 'pages/';
function getFullPath(fileName: string): string {
    return path.join(prefix, fileName);
}

export function getIndex(req: Request, res: Response): void  {
    const data: ResponseData = {
        pageName: 'my-website',
    }
    res.render(getFullPath('index'), data);
}
export function getProjectsPage(req: Request, res: Response): void {
    const data: ResponseData = {
        pageName: 'projects',
    }
    res.render(getFullPath('projects'), data);
}

export function getContactPage(req: Request, res: Response): void {
    const data: ResponseData = {
        pageName: 'contact',
    }
    res.render(getFullPath('contact'), data);
}
export function getNotFoundPage(req: Request, res:Response) {
    const data: ResponseData = {
        pageName: '404',
    }
    res.render(getFullPath('404'), data);
    
}
