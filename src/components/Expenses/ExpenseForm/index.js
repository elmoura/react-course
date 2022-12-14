import { useState } from "react";
import { Button } from "../../UI/Button";
import "./index.css";

export const ExpenseForm = ({ onSaveExpenseData, onCancelSubmit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const handleExpenseSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: Number(amount),
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const maxYear = new Date().getFullYear() + 1;

  return (
    <form onSubmit={handleExpenseSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={`${maxYear}-12-31`}
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <Button text="Cancel" onClickButton={onCancelSubmit} />
        <Button text="AddExpense" type="submit" />
      </div>
    </form>
  );
};
