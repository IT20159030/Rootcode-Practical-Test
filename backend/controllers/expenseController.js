import Expense from '../models/expenseModel.js';

// create expense
const createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get all expenses
const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json({
            success: true,
            data: expenses
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get expense by id
const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// update expense
const updateExpense = async (req, res) => {
    try {
        const {id} = req.params;
        const {
            title,
            description,
            category,
            amount,
            date
        } = req.body;

        const expense = await Expense.findById(id);

        // Check if the expense exists
        if (!expense) {
            return res.status(404).json({
                success: false,
                message: 'Expense not found'
            });
        }

        expense.title = title || expense.title;
        expense.description = description || expense.description;
        expense.category = category || expense.category;
        expense.amount = amount || expense.amount;
        expense.date = date || expense.date;

        await expense.save();

        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete expense
const deleteExpense = async (req, res) => {
    try {
        const {id} = req.params;
        const expense = await Expense.findById(id);

        // Check if the expense exists
        if (!expense) {
            return res.status(404).json({
                success: false,
                message: 'Expense not found'
            });
        }

        await expense.remove();

        res.status(200).json({
            success: true,
            message: 'Expense deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get expenses by category
const getExpensesByCategory = async (req, res) => {
    try {
        const {category} = req.params;
        const expenses = await Expense.find({category});

        res.status(200).json({
            success: true,
            data: expenses
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// get expenses by date range
const getExpensesByDateRange = async (req, res) => {
    try {
        const {startDate, endDate} = req.params;
        const expenses = await Expense.find({date: {$gte: startDate, $lte: endDate}});

        res.status(200).json({
            success: true,
            data: expenses
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// get expenses by amount range
const getExpensesByAmountRange = async (req, res) => {
    try {
        const {minAmount, maxAmount} = req.params;
        const expenses = await Expense.find({amount: {$gte: minAmount, $lte: maxAmount}});

        res.status(200).json({
            success: true,
            data: expenses
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense,
    getExpensesByCategory,
    getExpensesByDateRange,
    getExpensesByAmountRange
};
    
