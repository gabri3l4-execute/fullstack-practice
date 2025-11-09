import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router); // All routes now prefix with /api

export default app;