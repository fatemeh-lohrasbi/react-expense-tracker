import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./AllExpenseItem.css";

const AllExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((element) => {
    return element.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart filteredExpensesList={filteredExpenses} />
      <ExpenseList listItem= {filteredExpenses} />
    </Card> 
  );
};
export default AllExpenseItem;
