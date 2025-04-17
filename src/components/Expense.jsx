import './styles/expensetracker.css';
import { useState } from 'react';

const Expense = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [category, setCategory] = useState('living');
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Enter a valid amount!');
      return;
    }

    const newExpense = {
      id: Date.now(),
      amount,
      category,
    };

    setExpenses([...expenses, newExpense]);
    setExpenseAmount('');
    setCategory('living');
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const filteredExpenses = filter === 'all' ? expenses : expenses.filter((expense) => expense.category === filter);

  return (
    <div className='expense-container'>
      <h2><span className='title-expense'>Expense </span> Tracker</h2>
      <div className="expense-input">
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder='Enter an amount...'
          aria-label="Expense amount"
        />
        <select
          name="expense"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Expense category"
        >
          <option value="living">Living</option>
          <option value="personal">Personal</option>
        </select>
        <button onClick={handleAddExpense} aria-label="Add expense">+Add</button>
      </div>
      <div className="expense-type">
        <button onClick={() => setFilter('all')} aria-label="Show all expenses">All</button>
        <button onClick={() => setFilter('living')} aria-label="Show living expenses">Living</button>
        <button onClick={() => setFilter('personal')} aria-label="Show personal expenses">Personal</button>
      </div>
      <div className="expense-list">
        <h3>Expenses</h3>
        <ul>
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              ₹{expense.amount.toFixed(2)} - {expense.category}
              <button onClick={() => handleDeleteExpense(expense.id)} aria-label={`Delete expense of ₹${expense.amount.toFixed(2)} in ${expense.category}`}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="expense-total">
        <h3>Total Spent: ₹{totalExpense.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Expense;
