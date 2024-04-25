//redux

// import {uiActions} from '../store/ui-slice.js'

// const Common = () => {
//     const dispatch = useDispatch();
//     const httpRequest = async (requestConfig) => {
//         try {
//             const response = await fetch(requestConfig.url, {
//                 method: requestConfig.method ? requestConfig.method : 'GET',
//                 headers: requestConfig.headers ? requestConfig.headers : {},
//                 body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
//             });
//             // console.log(response);
//             return response;
            
//         } catch (error) {
//         // setError(error.message);
//         // Code to handle the error
//         dispatch(uiActions.uiNotification({
//             status: 'error',
//             message: 'Something is wrong!!',
//             isNotify:true
//         }));
//         console.log("An error occurred:", error.message);
//         } finally {
//         setTimeout(() => {
//             dispatch(uiActions.uiNotification({
//             status: '',
//             message: '',
//             isNotify:false
//             }));
//         },4000)
//         }
//     }

//     return {
//         httpRequest
//     }
// }

class Common{
    
    async httpRequest(requestConfig) {
        
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });
            // console.log(response);
            // return response.json();
            return {
                status: response.status,
                datas: await response.json()
            }
            
        } catch (error) {
        // setError(error.message);
        // Code to handle the error
    
        console.log("An error occurred:", error.message);
        }
        finally {
        
        }
    }

}

export default new Common;