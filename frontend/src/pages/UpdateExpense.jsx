import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/ContextProvider';
import { getExpense, updateExpense } from '../api/expensesAPI';

const UpdateExpense = () => {
  const { id } = useParams();
  const { mode } = useGlobalContext();

  const [expense, setExpense] = useState({
    title: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  useEffect(() => {
    const fetchExpense = async () => {
      const fetchedExpense = await getExpense(id);
      setExpense(fetchedExpense);
      console.log('fetchedExpense', fetchedExpense)
    };
    fetchExpense();
  }, [id]);

  const { title, description, category, amount, date } = expense;

  const onChange = (e) => {
    setExpense({ ...expense, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateExpense(id, expense);
    alert('Expense updated successfully');
  };

  const handleCancel = () => {
    window.location = '/all-expenses';
  };

  return (
    <div className={`bg-${mode === 'light' ? 'white' : 'gray-800'} text-${mode === 'light' ? 'gray-800' : 'white'} flex flex-col items-center justify-center min-h-screen`}>
      <h1 className="text-2xl font-semibold mb-4 text-center">Update Expense</h1>
      <form className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600"
            value={title}
            pattern="[A-Za-z0-9]+"
            required
            placeholder="Enter title"
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600"
            value={description}
            pattern="[A-Za-z0-9]+"
            required
            placeholder="Enter description"
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            id="category"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600"
            value={category}
            required
            onChange={(e) => onChange(e)}
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Household">Household</option>
            <option value="Health">Health</option>
            <option value="Social Life">Social Life</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600"
            value={amount}
            required
            placeholder="Enter amount"
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600"
            value={date.substring(0, 10)}
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600"
            onClick={onSubmit}
          >
            Update
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateExpense;
