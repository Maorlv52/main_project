import { Router, Request, Response } from 'express';
import Main from '../controllers/main';
import logger from '../configs/logger';

const router = Router();
const main = new Main();

router.get('/about', (req: Request, res: Response) => {

  const result = main.mainFunction(1);
  logger.info(`result: ${result}`);
  res.json({ message: result });
});

export default router;