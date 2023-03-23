import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./AllExpenseItem.css";

const AllExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </Card>
  );
};
export default AllExpenseItem;
