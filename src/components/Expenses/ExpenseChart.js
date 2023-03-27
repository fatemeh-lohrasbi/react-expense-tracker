import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.filteredExpensesList) {  //loop through array, so using of not in
        const expenseMonth = expense.date.getMonth(); // starting at 0 => january is 0 index
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPonits={chartDataPoints} />;
};

export default ExpenseChart;
