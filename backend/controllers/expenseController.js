// create expense
const createExpense = async (req, res) => {
    try {
        const { name, amount, date } = req.body;
        const expense = new _expenseModel.default({
        name,
        amount,
        date
        });
        await expense.save();
        res.status(201).json({
        message: 'Expense created successfully',
        data: expense
        });
    } catch (error) {
        res.status(500).json({
        message: 'Something went wrong',
        error: error.message
        });
    }
};

// get all expenses
const getAllExpenses = async (req, res) => {
    try {
        const expenses = await _expenseModel.default.find();
        res.status(200).json({
        message: 'All expenses fetched successfully',
        data: expenses
        });
    } catch (error) {
        res.status(500).json({
        message: 'Something went wrong',
        error: error.message
        });
    }
};

// get expense by id
const getExpenseById = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await _expenseModel.default.findById(id);
        res.status(200).json({
        message: 'Expense fetched successfully',
        data: expense
        });
    } catch (error) {
        res.status(500).json({
        message: 'Something went wrong',
        error: error.message
        });
    }
};

// update expense
const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, amount, date } = req.body;
        const expense = await _expenseModel.default.findByIdAndUpdate(id, {
        name,
        amount,
        date
        });
        await expense.save();
        res.status(200).json({
        message: 'Expense updated successfully',
        data: expense
        });
    } catch (error) {
        res.status(500).json({
        message: 'Something went wrong',
        error: error.message
        });
    }
};

// delete expense
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await _expenseModel.default.findByIdAndDelete(id);
        res.status(200).json({
        message: 'Expense deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
        message: 'Something went wrong',
        error: error.message
        });
    }
};

export default { createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense };