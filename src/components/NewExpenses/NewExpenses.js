import React from 'react';
import './NewExpenses.css';
import ExpensesForm from './ExpensesForm';


function NewExpenses({getData}) {

  const saveData = (enterData) => {
    const enterInputs = {
      ...enterData,
      id: Math.random().toString(),
    }
    getData(enterInputs);
  }

  return (
    <div className='new-expense'>
        <ExpensesForm onSaveSubmitData={saveData}/>
    </div>
  )
}

export default NewExpenses;