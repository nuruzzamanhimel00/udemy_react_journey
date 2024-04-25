import { createSlice } from '@reduxjs/toolkit'

const initiCounterState = {
    counter: 0,
    showCounter: true
}

const counterReducers = {
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
const counterSlice = createSlice({
    name: 'counter',
    initialState: initiCounterState,
    reducers: counterReducers
})
//user for dispatch
export const counterActions = counterSlice.actions
export default counterSlice.reducer;