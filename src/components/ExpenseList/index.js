import { Card } from "../Card";
import { ExpenseItem } from "../ExpenseItem";
import "./index.css";

export const ExpenseList = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};