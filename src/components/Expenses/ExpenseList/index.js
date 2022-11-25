import { useState } from "react";
import { Card } from "../../UI/Card";
import { ExpenseItem } from "../ExpenseItem";
import { ExpensesFilter } from "../ExpensesFilter";
import "./index.css";

export const ExpenseList = ({ items }) => {
  const defaultYear = new Date().getFullYear.toString();
  const [selectedYear, setSelectedYear] = useState(defaultYear);

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={handleYearSelection}
        />
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
