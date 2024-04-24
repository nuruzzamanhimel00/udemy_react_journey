import { useSelector } from 'react-redux'
const Notification = () => {
    const notification = useSelector(state => state.ui.notification)
    // console.log('notification',notification)
    const {status, message} = notification
    let alert_class = status === 'pending' ? 'alert-warning' : (
        status === 'success' ? 'alert-success' : 'alert-danger'
    )
    let isNotify = notification.isNotify
    return (
        <>
            {
                isNotify && 
                    <div className={`alert ${alert_class} m-0`} role="alert">
                        <div className="row">
                            <div className="col-md-6">
                                {status}
                            </div>
                            <div className="col-md-6">
                                {message}
                            </div>
                        </div>
                </div>
            }
        
        </>
    )
}

export default Notification;