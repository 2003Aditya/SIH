import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import routes
import stationRoutes from './routes/stationRoutes';
import facilityRoutes from './routes/facilityRoutes';
import navigationRoutes from './routes/navigationRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/stations', stationRoutes);
app.use('/auth', authRoutes);

// Error Handling Middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

