const redux = require('redux')

const countRedux = (state = { count: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            count: state.count + 1
        }
    }
    else if(action.type === 'decriment') {
        return {
            count: state.count - 1
        }
    }
    
}

const store = redux.createStore(countRedux)

const countSubscribe = () => {
    let latestState = store.getState()
    console.log(latestState)
}
store.subscribe(countSubscribe)

store.dispatch({type:'increment'})
store.dispatch({type:'decriment'})