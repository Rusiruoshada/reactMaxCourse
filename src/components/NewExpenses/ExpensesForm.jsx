import React, { useState } from 'react'

import './ExpensesForm.css';

function ExpensesForm() { 

    const [inputChange, setInputChange] = useState({
        title:'',
        amount: '',
        date: '',
    })

    const handleInputChange= (event) => {
        const inputName = event.target.name;
        if(event.target.name === 'title') {
            setInputChange((prev) => ({ ...prev, title: event.target.value}));
        }else if(inputName === 'amount') {
            setInputChange((prev) => ({ ...prev,amount: event.target.value}));
        }else if(inputName === 'date') {
            setInputChange((prev) => ({ ...prev, date: event.target.value}));
        }
    }

  return (
    <form onSub>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label htmlFor="title">Title: </label>
                <input type='text' id='title' onChange={handleInputChange} name='title' />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount: </label>
                <input type='number' id='amount' min={0.01} step={0.01} onChange={handleInputChange} name='amount' />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date: </label>
                <input type='date' id='date' min='2023-01-01' max='2025-12-31' onChange={handleInputChange} name='date'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expenses</button>
        </div>
    </form>
  )
}

export default ExpensesForm