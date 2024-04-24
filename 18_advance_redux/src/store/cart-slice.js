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
        state.products = action.payload.items
        state.totalQuantity = action.payload.totalQuantity
    },
    addItemToCart(state, action) {
        let payload = action.payload
        let existingItem = state.items.find(item => item.itemId === payload.id)
        if (!existingItem) {
            state.items.push({
                itemId: payload.id,
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
        let find = state.items.find(item => item.itemId === id)
        if (find.quantity === 1) {
            state.items = state.items.filter(item => item.itemId !== id)
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