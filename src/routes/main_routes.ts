import { Router, Request, Response } from 'express';
import MainController from '../controllers/main.controller';
import logger from '../configs/logger';
import joiValidator from '../middlewares/validate';
import {aboutSchema, calculateSchema} from '../validators/schemas/main_routes';

const router = Router();
const main = new MainController();

router.get('/exampleGet', joiValidator(aboutSchema), (req: Request, res: Response) => {
  const result = main.mainFunction(1);
  logger.info(`[main_routes](about): ${result}`);
  res.json({ message: result });
});

router.post('/examplePost', joiValidator(calculateSchema), (req: Request, res: Response) => {
    const { num1, num2 } = req.body;
  const result = main.calculate({ num1, num2 });
    logger.info(`[main_routes](calculate): ${result}`);
    res.json({ message: result });
});

router.post('/createUser', (req: Request, res: Response) => {
    const result = main.createUser(req.body);
    logger.info(`[main_routes](createUser): ${result}`);
    res.json({ message: result });
});

export default router;