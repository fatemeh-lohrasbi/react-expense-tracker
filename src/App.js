import { useState } from "react";
import AllExpenseItem from "./components/Expenses/AllExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";


const initial_expenses = [
  {
    id: "e1",
    title: "Book",
    amount: 713.33,
    date: new Date(2023, 1, 14),
  },
  {
    id: "e2", 
    title: "Gym",
    amount: 950.40,
    date: new Date(2021, 6, 12)
  },
  {
    id: "e3",
    title: "Insurance",
    amount: 380.28,
    date: new Date(2021, 8, 28),
  },
  {
    id: "e4",
    title: "Clothing",
    amount: 490,
    date: new Date(2019, 9, 11),
  },
  {
    id: "e5",
    title: "Food",
    amount: 210.38,
    date: new Date(2020, 2, 17),
  },
  {
    id: "e6",
    title: "Home repairs",
    amount: 200.54,
    date: new Date(2020, 9, 23),
  },
  {
    id: "e7",
    title: "fuel",
    amount: 1000,
    date: new Date(2019, 12, 5),
  },
  {
    id: "e7",
    title: "Internet",
    amount: 837.41,
    date: new Date(2023, 2, 6),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);

  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <AllExpenseItem items={expenses} />
    </div>
  );
};

export default App;
