import express, { Request, Response } from 'express';
import mainRoutes from './routes/main_routes';
import {MAIN_PORT} from "./configs/config";

const app = express();

app.use(express.json());

app.use('/main', mainRoutes);

app.get('/firstReq', (req: Request, res: Response) => {
  res.json({ message: 'Happy developing ✨' });
});

app.listen(MAIN_PORT, () => {
  console.log(`Server is running on http://localhost:${MAIN_PORT}`);
});