import { MenuState } from "@/types/menu";
import { createSlice } from "@reduxjs/toolkit";
const initialState: MenuState = {
  items: [],
  isLoading: false,
  error: null,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
