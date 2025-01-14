import { Router, Request, Response } from 'express';

const router = Router();

// Define a basic route
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the main route!' });
});

// Define another route
router.get('/about', (req: Request, res: Response) => {

  const res = main.about();
  res.json({ message: 'About this application' });
});

export default router;