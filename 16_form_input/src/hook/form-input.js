
import { useReducer } from 'react';

const inputReducerFun = (state, action) => {
    if (action.type === 'inputValue') {
        return {
            ...state,
            inputValue: action.value
        }
    }
    else if (action.type === 'inputTuch') {
        return {
            ...state,
            inputTuch: action.value
        }
    } else {
        return {
            inputValue: '',
            inputTuch: false
        }
    }
}
const useFormInput = (validateData) => {
    // const [inputValue, setinputValue] = useState('')
    // const [inputTuch, setEnterIsTuch] = useState(false)

    const [getValue, dispatchGetValue] = useReducer(inputReducerFun, {
        inputValue: '',
        inputTuch: false
     })
  
    let isValidCheck = validateData(getValue.inputValue);

    // console.log('isValidCheck',isValidCheck, getValue.inputTuch, getValue.inputTuch && !isValidCheck )

    if (getValue.inputTuch && !isValidCheck) {
      isValidCheck = false
    } else {
      isValidCheck = true
    }
    // console.log('isValidCheck',isValidCheck)
    // console.log('isValid',isValidCheck, inputValue, inputTuch)
    const enterInputHandler = (event) => {
        dispatchGetValue({
            type: 'inputValue',
            value: event.target.value
        })
    }
    const enterIsTuchHandler = (event) => {
    
        dispatchGetValue({
            type: 'inputTuch',
            value: true
        })
    }
    const reset = () => {
        dispatchGetValue({
            type:''
        })
    }
    // console.log('getValue.inputValue',getValue.inputValue)
    return {
        getValue: getValue.inputValue,
        isValidCheck,
        enterInputHandler,
        enterIsTuchHandler,
        reset
    }
}

export default  useFormInput;