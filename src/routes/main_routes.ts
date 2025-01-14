import { Router, Request, Response } from 'express';
import Main from '../controllers/main';

const router = Router();
const main = new Main();


// Define a basic route
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the main route!' });
});

// Define another route
router.get('/about', (req: Request, res: Response) => {

  const result = main.mainFunction();
  res.json({ message: 'About this application' });
});

export default router;