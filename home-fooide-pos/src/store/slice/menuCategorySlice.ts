import { MenuCategoryState } from "@/types/menuCategory";
import { createSlice } from "@reduxjs/toolkit";
const initialState: MenuCategoryState = {
  items: [],
  error: null,
  isLoading: false,
};
export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategory: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setMenuCategory } = menuCategorySlice.actions;
export default menuCategorySlice.reducer;
