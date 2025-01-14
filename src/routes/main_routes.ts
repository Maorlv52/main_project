import { Router, Request, Response } from 'express';
import MainController from '../controllers/main.controller';
import logger from '../configs/logger';
import joiValidator from '../middlewares/validate';
import { aboutSchema, calculateSchema, createUserSchema } from '../validators/schemas/main_routes';

const router = Router();
const main = new MainController();

router.post('/createUser', joiValidator(createUserSchema), async (req: Request, res: Response) => {
	try {
		const result = await main.createUser(req.body);
		logger.info(`[main_routes](createUser): successfully created user`);
		res.json({ message: result });
	} catch (e: any) {
		logger.error(`[main_routes](createUser) error: ${e.message}`);
		res.status(500).json({ message: e.message });
	}
});

export default router;
