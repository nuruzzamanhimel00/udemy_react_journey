import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
    items: [],
    totalQuantity: 0,
    products:[],
}

const totalCartQtySum = (state) => {
    state.totalQuantity = state.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0,
        );
}


const cartReducer = {
    replaceCart(state, action) {
        state.products = action.payload.products ?action.payload.products : state.products
        state.totalQuantity = action.payload.totalQuantity ? action.payload.totalQuantity : state.totalQuantity
        state.items = action.payload.items ? action.payload.items : state.items
    },
    addItemToCart(state, action) {
        let payload = action.payload
        let existingItem = state.items.find(item => item.id === payload.id)
        if (!existingItem) {
            state.items.push({
                id: payload.id,
                price: parseFloat(payload.price),
                quantity: 1,
                totalPrice: parseFloat(payload.price),
                name: payload.title

            })
        } else {
            existingItem.quantity++
            existingItem.totalPrice = existingItem.price * existingItem.quantity
        }
    
        totalCartQtySum(state)
    },
    removeItemFromCart(state, action) {
        let id = action.payload
        let find = state.items.find(item => item.id === id)
        if (find.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id)
        } else {
            find.quantity--
            find.totalPrice = find.price * find.quantity
        }

        //total qty
        totalCartQtySum(state)
    }

}



const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: cartReducer,
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer