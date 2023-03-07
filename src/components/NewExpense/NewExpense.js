import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(), //it's not a perfect unique id, theoretically we could generate the same value twice, but it's good enough for this demo
        }
        props.onAddExpense(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />  {/*pass data from child to parent*/}
        </div>
    )
}
export default NewExpense;