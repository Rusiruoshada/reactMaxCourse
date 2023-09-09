import React, { useState } from 'react'

import './ExpensesForm.css';

function ExpensesForm({onSaveSubmitData}) { 

    const [inputChange, setInputChange] = useState({
        title:'',
        amount: '',
        date: '',
    });
    const [ObjectEmpty, setObjectEmpty] = useState(false);

    const handleInputChange= (event) => {
        const inputName = event.target.name;
        
        if(inputName === 'date') {
            setInputChange((prev) => ({ ...prev, date:new Date(event.target.value)}));
        }else{
            setInputChange((prev) => ({
                ...prev, [inputName]: event.target.value
            }))
        }
        for(let i = 0; i < Object.keys(inputChange).length; i++ ){
            if(Object.values(inputChange)[i].length > 0){
                setObjectEmpty(false);
        }}
    }

    const submitHandle = (event) => {
        event.preventDefault();
        for(let i = 0; i < Object.keys(inputChange).length; i++ ){
            if(Object.values(inputChange)[i] === '') {
                setObjectEmpty(true);
                return;
            }
        }
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

    const reset = () => {
        setObjectEmpty(false);
        setInputChange({title: '', amount: '', date: ''})
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
                <input type='date' id='date' min='2019-01-01' max='2023-12-31' onChange={handleInputChange} name='date' value={submitHandle && ''} />
            </div>
        </div>
        {ObjectEmpty && (<p style={{color: 'red',backgroundColor:'lightpink'}}>Sorry, Invalid Input!</p>)}
        <button className='new-expense__actions' type="submit">Add Expenses</button>
        <button type='reset' onClick={reset}>Reset</button>
        </>)}
        <button type='button' onClick={show}>{visible?"Cancel":'New Expenses'}</button>
    </form>
  )
}

export default ExpensesForm;