import {createStore} from 'redux'

const countReducer = (state = {count: 0}, action) => {
    if (state.type === 'increment') {
        return {
            count : state.count + 1
        }
    }
    if (state.type === 'decrement') {
        return {
            count : state.count - 1
        }
    }

}
const store = createStore(countReducer)

export default store;

