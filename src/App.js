import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let expenses = [];

let storedExpenses = JSON.parse(localStorage.getItem("items"));

console.log(storedExpenses);

// if (storedExpenses) {
//   expenses = storedExpenses;
// }

const App = () => {

  const [expensesArray, setExpensesArray] = useState(expenses);

  if (!storedExpenses) {
    localStorage.setItem("items", JSON.stringify(expensesArray));
    console.log("vds");
  }

  const addExpenseHandler = (expense) => {
    setExpensesArray((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    let fromJson = JSON.parse(localStorage.getItem("items"));
    fromJson.unshift(expense);
    localStorage.setItem("items", JSON.stringify(fromJson));
  };

  if (storedExpenses) {
    storedExpenses = JSON.parse(localStorage.getItem("items"));
    for (let i = 0; i < storedExpenses.length; i++) {
      storedExpenses[i].date = new Date(storedExpenses[i].date);
    }
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {storedExpenses && <Expenses items={storedExpenses} />}
      {!storedExpenses && <Expenses items={expensesArray} />}
    </div>
  );
};

export default App;

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2',{},'Let\'s get started'),
//   React.createElement(Expenses,{items: expenses})
// )
