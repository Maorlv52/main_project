import express, { Request, Response } from 'express';
import mainRoutes from './routes/main_routes';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the main routes
app.use('/main', mainRoutes);

// Basic route
app.get('/firstReq', (req: Request, res: Response) => {
  res.json({ message: 'Happy developing ✨' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});