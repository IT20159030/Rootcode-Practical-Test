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
    // confirmation message
    const confirmDelete = window.confirm('Are you sure you want to delete this expense?');
    if (!confirmDelete) return;

    await deleteExpense(id);
    setExpenses(expenses.filter((expense) => expense._id !== id));
  };

  const [filter, setFilter] = useState('All');

  const onChange = (e) => {
    setFilter(e.target.value);
    setExpenses(expenses.filter((expense) => expense.category === e.target.value));
  };


  return (
    <div className={`bg-${mode === 'light' ? 'white' : 'gray-800'} text-${mode === 'light' ? 'gray-800' : 'white'} flex flex-col items-center justify-center min-h-screen `}>
      <h1 className="text-2xl font-semibold mb-4 text-center">View All Expenses</h1>

      {/* filter by category */} 
      <div className="flex justify-center items-center mb-4">
        <select className="p-2 rounded-md border" name="category" id="category" onChange={(e) => onChange(e)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Health">Health</option>
          <option value="HouseHold">HouseHold</option>
          <option value="Social Life">Social Life</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      {/* table of expenses */}

      
      <table className={`bg-${mode === 'light' ? 'gray-300' : 'gray-800'} text-${mode === 'light' ? 'gray-800' : 'white'} p-6 rounded-lg shadow-md w-10/12`}>
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
              <td>Rs. {expense.amount}</td>
              <td>{expense.date.substring(0, 10)}</td>
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
