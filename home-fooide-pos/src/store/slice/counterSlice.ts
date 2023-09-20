import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
  isLoading: boolean;
  data: any;
}
const initialState: CounterState = {
  value: 0,
  isLoading: false,
  data: {},
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
