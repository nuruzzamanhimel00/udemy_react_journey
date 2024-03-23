import './ChartItem.css'
const ChartItem = (props) =>{
    let barFilterHeight = '0%'
    if(props.value > 0){
        barFilterHeight = `${Math.round((props.value / props.maxValue) * 100)}%`
    }
    return (
        <> 
            <div className="exp_chart_item">
                    <div>
                        <div className='bg' style={{height:barFilterHeight}}></div>
                    </div>
                    <div>
                        {props.chatDataPoint.label}
                    </div>
                </div>
        </>
    );
}

export default ChartItem;