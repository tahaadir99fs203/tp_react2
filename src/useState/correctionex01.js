import React, { useState } from "react";

const ExpenseTracker = () =>
{
    const [expenses, setExpenses] = useState([]);
    const [formData, setFormData] = useState({ category: "", amount: "", description: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.category.trim() !== "" && formData.amount.trim() !== "" && formData.description.trim() !== "") {
            setExpenses([...expenses, { id: Date.now(), ...formData }]);
            setFormData({ category: "", amount: "", description: "" });
        }
    };

    const handleDelete = (id) => {
        const updatedExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(updatedExpenses);
    };

    const getTotalExpense = () => {
        return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0).toFixed(2);
    };

    return (
        <div>
            <h1>Expense Tracker</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </label>
                <label>
                    Amount:
                    <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
                <button type="submit">Add Expense</button>
            </form>
            <div>
                <h2>Expenses</h2>
                <ul>
                    {expenses.map(expense => (
                        <li key={expense.id}>
                            <div>Category: {expense.category}</div>
                            <div>Amount: {expense.amount}</div>
                            <div>Description: {expense.description}</div>
                            <button onClick={() => handleDelete(expense.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <h2>Total Expense: {getTotalExpense()}</h2>
            </div>
        </div>
    );
};

export default ExpenseTracker;