import { Router, Request, Response } from 'express';
import Main from '../controllers/main';

const router = Router();
const main = new Main();


router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the main route!' });
});

router.get('/about', (req: Request, res: Response) => {

  const result = main.mainFunction();
  res.json({ message: result });
});

export default router;