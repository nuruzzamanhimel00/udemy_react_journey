
import { uiActions } from '../store/ui-slice.js'
import { useDispatch } from 'react-redux'
const useHttp = (props) => {
    const dispatch = useDispatch();
    const makeRequest = async (requestConfig, applyData) => {
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });
            // console.log(response);
            applyData(response)
            
        } catch (error) {
        // setError(error.message);
        // Code to handle the error
        dispatch(uiActions.uiNotification({
            status: 'error',
            message: 'Something is wrong!!',
            isNotify:true
        }));
        console.log("An error occurred:", error.message);
        } finally {
        setTimeout(() => {
            dispatch(uiActions.uiNotification({
            status: '',
            message: '',
            isNotify:false
            }));
        },4000)
        }
    }

    return {
        makeRequest
    }
}

export default useHttp