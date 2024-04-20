import { createSlice } from '@reduxjs/toolkit'
const initialAuthState = {
    isAuthonticated: false
}

const authReducers = {
    login(state) {
        state.isAuthonticated = true
    },
    logout(state) {
        state.isAuthonticated = false;
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: authReducers
})
export const authActions = authSlice.actions
export default authSlice.reducer