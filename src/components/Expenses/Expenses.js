import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2023');
  const changeDate = (onEventChange) => {
    setYear(onEventChange);
  };

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onEventChange={changeDate} />
        {props.items.map((item, index) => (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
