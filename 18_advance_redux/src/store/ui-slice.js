import { createSlice } from '@reduxjs/toolkit'

const uiInitialState = {
  isVisiabled: false,
  notification: {
    status: null,
    message: null,
  }
}
const uiReducer = {
    uiToggle(state) {
      state.isVisiabled = !state.isVisiabled
      
    },
  uiNotification(state, action) {
    // console.log('dd', action.payload)
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        isNotify: action.payload.isNotify
      }
    }
  }
const ulSlice = createSlice({
  name: 'ui',
initialState: uiInitialState,
  reducers: uiReducer,
})

export const uiActions = ulSlice.actions
export default ulSlice.reducer;
