import { useState } from "react";
import { Button } from "../../UI/Button";
import { ExpenseForm } from "../ExpenseForm";
import "./index.css";

export const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addExpenseButtonHandler = () => {
    setShowExpenseForm(true);
  };

  const cancelExpenseHandler = () => {
    setShowExpenseForm(false);
  };

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm ? (
        <Button
          text="Add New Expense"
          onClickButton={addExpenseButtonHandler}
        />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelSubmit={cancelExpenseHandler}
        />
      )}
    </div>
  );
};
