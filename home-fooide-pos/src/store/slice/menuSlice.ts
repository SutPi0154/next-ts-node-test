import { MenuSlide } from "@/types/menu";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MenuSlide = {
  items: [],
  isLoading: false,
  error: null,
};
export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
