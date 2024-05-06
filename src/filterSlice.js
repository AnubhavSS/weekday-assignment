import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  }
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    increment: (state, action) => {
      // Directly mutate the state object
      Object.assign(state, action.payload);
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = filterSlice.actions

export const {reducer:filterReducer}=filterSlice