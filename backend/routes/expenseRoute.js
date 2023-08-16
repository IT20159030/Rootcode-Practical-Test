import express from 'express';
import { 
    createExpense, 
    getAllExpenses, 
    getExpenseById, 
    updateExpense, 
    deleteExpense, 
    getExpenseByCategory, 
    getExpenseByDateRange, 
    getExpenseByAmountRange 
 } from '../controllers/expenseController.js';

const router = express.Router();

router.post('/', createExpense);
router.get('/', getAllExpenses);
router.get('/:id', getExpenseById);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);
router.get('/category/:category', getExpenseByCategory);
router.get('/date/:startDate/:endDate', getExpenseByDateRange);
router.get('/amount/:startAmount/:endAmount', getExpenseByAmountRange);

export default router;
