import { Router } from 'express';
import mainRouter from './main.js';
import todosRouter from './todos.js';

const router = Router();

router.use('/', mainRouter);
router.use('/todos', todosRouter);

export default router;