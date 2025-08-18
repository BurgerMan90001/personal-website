
import { Request, Response } from 'express';
import { ResponseData } from 'models';
import path from 'path';
import { IndexController } from 'controllers';

const prefix: string = 'pages/';

function getFullPath(fileName: string): string {
    return path.join(prefix, fileName);
}
// declare controller functions.
export const indexController: IndexController = {
    getIndex(req: Request, res: Response): void  {
        const data: ResponseData = {
            pageName: 'my-website',
        }
        res.render(getFullPath('index'), data);
    },
    getProjectsPage(req: Request, res: Response): void {
        const data: ResponseData = {
            pageName: 'projects',
        }
        res.render(getFullPath('projects'), data);
    },

    getContactPage(req: Request, res: Response): void {
        const data: ResponseData = {
            pageName: 'contact',
        }
        res.render(getFullPath('contact'), data);
    },
    getNotFoundPage(req: Request, res:Response): void {
        const data: ResponseData = {
            pageName: '404',
        }
        res.render(getFullPath('404'), data);
    },
}
