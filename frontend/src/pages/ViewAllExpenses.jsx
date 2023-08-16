import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/ContextProvider';
import { getExpenses, deleteExpense } from '../api/expensesAPI';

const ViewAllExpenses = () => {
  const { mode } = useGlobalContext();

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const fetchedExpenses = await getExpenses();
      setExpenses(fetchedExpenses);
    };
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    await deleteExpense(id);

    // fetching all expenses again
    const fetchedExpenses = await getExpenses();
    setExpenses(fetchedExpenses);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-2xl font-semibold mb-4 text-center">View All Expenses</h1>
      <table className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-10/12">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* if there are expenses */}
          {expenses.length > 0 && expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <Link to={`/expenses/update/${expense._id}`} className="mr-2">
                  <span className="text-blue-500 cursor-pointer mr-2">Update</span>
                </Link>
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(expense._id)}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllExpenses;
