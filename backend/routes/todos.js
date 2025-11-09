import { Router } from 'express';
import { addTodos, getTodos } from '../controllers/todosController.js';
import { nanoid } from "nanoid";

const router = Router();

router.post('/', (req, res) => {
    const todo = { id: nanoid(), text: req.body };

    addTodos(todo)
    res.json(todo);
});

router.get('/', (req, res) => {
    const response = getTodos();
    res.json(response);
});

export default router;