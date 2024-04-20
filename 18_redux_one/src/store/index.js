
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initiCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initiCounterState,
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

const initialAuthState = {
    isAuthonticated: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthonticated = true
        },
        logout(state) {
            state.isAuthonticated = false;
        }
    }
})
// // single reducer slice
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
// multiple reducer slice
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store;

