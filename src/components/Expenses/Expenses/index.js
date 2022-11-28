import { useState } from "react";
import { Card } from "../../UI/Card";
import { ExpenseItem } from "../ExpenseItem";
import { ExpensesFilter } from "../ExpensesFilter";
import { ExpensesList } from "../ExpensesList";
import "./index.css";

export const Expenses = ({ items }) => {
  const defaultYear = new Date().getFullYear.toString();
  const [selectedYear, setSelectedYear] = useState(defaultYear);

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={handleYearSelection}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};
