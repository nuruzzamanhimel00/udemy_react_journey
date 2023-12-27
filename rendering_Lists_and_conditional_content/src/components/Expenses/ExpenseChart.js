import './ExpenseChart.css'
import Chart from '../Chart/Chat.js'

const ExpenseChart = (props) =>{
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Fab', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'July', value: 0},
        {label: 'Agst', value: 0},
        {label: 'Spt', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (let expense of props.expenses) {
        let getMonth = expense.date.getMonth();
        chartDataPoints[getMonth].value += expense.amount;
        // console.log(getMonth)
      }
    //   console.log(chartDataPoints)
    return (
        <> 
           <Chart dataPoint={chartDataPoints} />
        </>
    );
}

export default ExpenseChart;