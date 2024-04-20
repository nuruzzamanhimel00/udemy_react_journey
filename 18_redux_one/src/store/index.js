import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initiState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initiState,
    reducers: {
        increment(state) {
            state.counter++;
         },
        decrement(state) {
            state.counter--;
         },
        increase(state, action) {
            state.counter = state.counter + action.payload
         },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

// single reducer slice
const store = configureStore({
    reducer: counterSlice.reducer
});
// // multiple reducer slice
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// });

export const counterActions = counterSlice.actions
export default store;

