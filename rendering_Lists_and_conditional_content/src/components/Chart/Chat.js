import ChartItem from './ChartItem.js'
const Chart = (props) =>{
    const dataPointValue = props.dataPoint.map((dp)=>dp.value)
    const totalMaxValue = Math.max(...dataPointValue)
    // console.log(dataPointValue)
    return (
        <>
         <div className="exp_chart_main"> 
         {
            props.dataPoint.map((dp)=>(
                <ChartItem
                    key={dp.label}
                    chatDataPoint={dp}
                    maxValue={totalMaxValue}
                    value={dp.value}
                />
            ))
         }
              
            </div>
        </>
    );
}

export default Chart;