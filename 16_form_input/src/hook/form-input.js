
import { useState } from 'react';
const useFormInput = (validateData) => {
    const [enterValue, setEnterValue] = useState('')
    const [enterIsTuch, setEnterIsTuch] = useState(false)
  
    let isValidCheck = validateData(enterValue);

    

    if (enterIsTuch && !isValidCheck) {
      isValidCheck = false
    } else {
      isValidCheck = true
    }
  
    console.log('isValid',isValidCheck, enterValue, enterIsTuch)
    const enterInputHandler = (event) => {
        setEnterValue(event.target.value)
    }
    const enterIsTuchHandler = (event) => {
        setEnterIsTuch(true)
    }
    const reset = () => {
        setEnterValue('')
        setEnterIsTuch(false)
    }
    return {
        enterValue,
        setEnterValue,
        enterIsTuch,
        setEnterIsTuch,
        isValidCheck,
        enterInputHandler,
        enterIsTuchHandler,
        reset
    }
}

export default  useFormInput;