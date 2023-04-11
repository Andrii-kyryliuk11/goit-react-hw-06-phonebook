import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeValue } = filter.actions;
