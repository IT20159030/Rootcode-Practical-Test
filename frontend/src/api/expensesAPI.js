import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:5000/api/expenses`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// get all expenses
export const getExpenses = async () => {
    try {
        const { data } = await apiClient.get('/');
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get expense by id
export const getExpense = async (id) => {
    try {
        const { data } = await apiClient.get(`/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// create expense
export const createExpense = async (expense) => {
    try {
        const { data } = await apiClient.post('/', expense);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// update expense
export const updateExpense = async (id, expense) => {
    try {
        const { data } = await apiClient.put(`/${id}`, expense);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// delete expense
export const deleteExpense = async (id) => {
    try {
        const { data } = await apiClient.delete(`/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get expenses by category
export const getExpensesByCategory = async (category) => {
    try {
        const { data } = await apiClient.get(`/category/${category}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get expenses by date range
export const getExpensesByDateRange = async (startDate, endDate) => {
    try {
        const { data } = await apiClient.get(`/date-range/${startDate}/${endDate}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get expenses by amount range
export const getExpensesByAmountRange = async (minAmount, maxAmount) => {
    try {
        const { data } = await apiClient.get(`/amount-range/${minAmount}/${maxAmount}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
