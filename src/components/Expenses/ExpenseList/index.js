import { Card } from "../../UI/Card";
import { ExpenseItem } from "../ExpenseItem";
import "./index.css";

export const ExpenseList = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
