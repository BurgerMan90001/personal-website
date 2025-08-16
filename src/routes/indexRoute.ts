
import { Request, Response } from 'express';

// MAYBE USE A VIEW ENGINE
router.get('/', (req, res, next) => {
  res.render('index', { page: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('index', { page: 'About' });
});

router.get('/contact-me', (req, res, next) => {
  res.render('index', { page: 'Contact Me' });
});
export function getIndex(req: Request, res: Response): void  {
    res.render('index', { page: 'Home' })
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
