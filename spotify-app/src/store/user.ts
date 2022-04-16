import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userToken',
  initialState: {
    userToken: ''
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken += action.payload
    }
  }
})

export const { setUserToken } = userSlice.actions
export default userSlice.reducer
