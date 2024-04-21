import { createSlice } from '@reduxjs/toolkit'

const uiInitialState = {
    isVisiabled: false,
}
const uiReducer = {
    uiToggle(state) {
      state.isVisiabled = !state.isVisiabled
    },
  }
const ulSlice = createSlice({
  name: 'ui',
initialState: uiInitialState,
  reducers: uiReducer,
})

export const uiActions = ulSlice.actions
export default ulSlice.reducer;
