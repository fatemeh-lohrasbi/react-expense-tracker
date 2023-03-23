import React, { useState } from "react";
import "../Expenses/AllExpenseItem.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

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
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </Card>
  );
};
export default AllExpenseItem;
