import { Router, Request, Response } from 'express';
import Main from '../controllers/main';

const router = Router();
const main = new Main();

router.get('/about', (req: Request, res: Response) => {

  const result = main.mainFunction(1);
  res.json({ message: result });
});

export default router;