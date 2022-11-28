import { useState } from "react";
import { Card } from "../../UI/Card";
import { ExpenseItem } from "../ExpenseItem";
import { ExpensesFilter } from "../ExpensesFilter";
import "./index.css";

export const ExpenseList = ({ items }) => {
  const defaultYear = new Date().getFullYear.toString();
  const [selectedYear, setSelectedYear] = useState(defaultYear);

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={handleYearSelection}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
