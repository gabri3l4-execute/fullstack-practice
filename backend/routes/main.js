import express, { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({text: 'Hello from backend'});
});

export default router;