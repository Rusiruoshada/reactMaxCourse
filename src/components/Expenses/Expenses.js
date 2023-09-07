import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [year, setYear] = useState('2022');
  const changeDate = (onEventChange) => {
    setYear(onEventChange);
  };
  const value = props.items.filter(
    (card) => card.date.getFullYear().toString() === year
  );

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onEventChange={changeDate} />
        <ExpensesList items={value}/>
      </Card>
    </li>
  );
};

export default Expenses;
