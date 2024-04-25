import { useState, useEffect } from 'react'
const useInput = (validateValue) => {
    const [enterValue, setEnterValue] = useState('');
    const [isTuch, setIsTuch] = useState(false);
    const [formIsValide, setFormIsValide] = useState(true);

    const enterNameIsValied = validateValue(enterValue) && isTuch;
    // const enterNameIsValied = enterValue === '' && isTuch;

    // validateValue(enterValue)

    useEffect(() => {
        if (enterValue === '') {
          setFormIsValide(false)
        } else {
          setFormIsValide(true)
        }
      }, [enterValue])

    const enterNameInputHandler = (event) => {
        setIsTuch(true)
        if(event.target.value.trim() === '') {
          setEnterValue('');
          return;
        }
        setEnterValue(event.target.value);
      }
    const enterNameBlurHandlr = (event) => {
        setFormIsValide(true);
    }

    const reset = () => {
        setIsTuch(false)
        setEnterValue('');
    }
    
    return {
        value: enterValue,
        setEnterValue,
        setIsTuch,
        enterNameIsValied,
        enterNameInputHandler,
        enterNameBlurHandlr,
        formIsValide,
        reset
    }

}

export default useInput;