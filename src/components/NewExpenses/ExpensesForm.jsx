import React, { useState } from 'react'

import './ExpensesForm.css';

function ExpensesForm({onSaveSubmitData}) { 

    const [inputChange, setInputChange] = useState({
        title:'',
        amount: '',
        date: '',
    })

    const handleInputChange= (event) => {
        const inputName = event.target.name;

        if(inputName === 'date') {
            setInputChange((prev) => ({ ...prev, date:new Date(event.target.value)}));
        }else{
            setInputChange((prev) => ({
                ...prev, [inputName]: event.target.value
            }))
        }
    }

    const submitHandle = (event) => {
        event.preventDefault();
        onSaveSubmitData(inputChange);
        setInputChange({
            title:'',
            amount: '',
            date: '',
        })

    }

    const [visible, setVisible] = useState(false);

    const show = () => {
      setVisible(!visible)
    }

  return (
    <form onSubmit={submitHandle}>
        {visible && (<>
        <div className='new-expense__controls'>
           
            <div className="new-expense__control">
                <label htmlFor="title">Title: </label>
                <input type='text' id='title' value={inputChange.title} onChange={handleInputChange} name='title' />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount: </label>
                <input type='number' id='amount' value={inputChange.amount} min={0.01} step={0.01} onChange={handleInputChange} name='amount' />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date: </label>
                <input type='date' id='date' min='2019-01-01' max='2023-12-31' onChange={handleInputChange} name='date'/>
            </div>
        </div>
            <button className='new-expense__actions' type="submit">Add Expenses</button>
        </>)}
        <button type='button' onClick={show}>{visible?"Cancel":'New Expenses'}</button>
    </form>
  )
}

export default ExpensesForm