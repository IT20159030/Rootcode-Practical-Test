import express from 'express';
import { 
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense,
    getExpensesByCategory,
    getExpensesByDateRange,
    getExpensesByAmountRange
 } from '../controllers/expenseController.js';

const router = express.Router();

router.post('/', createExpense);
router.get('/', getAllExpenses);
router.get('/:id', getExpenseById);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);
router.get('/category/:category', getExpensesByCategory);
router.get('/date/:startDate/:endDate', getExpensesByDateRange);
router.get('/amount/:startAmount/:endAmount', getExpensesByAmountRange);

export default router;
