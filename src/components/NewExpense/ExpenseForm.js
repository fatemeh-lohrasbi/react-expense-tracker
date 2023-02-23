import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [titleInputValue, setTitleInputValue] = useState('');
  const [amountInputValue, setAmountInputValue] = useState('');
  const [dateInputValue, setDateInputValue] = useState('');


  const titleChangeHandler = (event) => {
    setTitleInputValue(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountInputValue(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formExpenseDate = {
      title: titleInputValue,
      amount: amountInputValue,
      date: dateInputValue,
    }
    console.log(formExpenseDate);
    // clear inputs after form submitted
    setTitleInputValue("");
    setAmountInputValue("");
    setDateInputValue("");
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleInputValue} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountInputValue}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateInputValue}
            min="2020-08-11"
            max="2023-02-18"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
