import config from "@/config";
import {
  CreateMenuCategory,
  MenuCategoryPayload,
  MenuCategoryState,
} from "@/types/menuCategory";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MenuCategoryState = {
  items: [],
  isLoading: false,
  error: null,
};

export const createMenuCategory = createAsyncThunk(
  "menuCategory/createMenuCategory",
  async (payload: CreateMenuCategory, thunkApi) => {
    const api = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const menuCategories = await api.json();
    thunkApi.dispatch(setMenuCategory(menuCategories));
  }
);
export const UpdateMenuCategory = createAsyncThunk(
  "updateMenuCategory/createMenuCategory",
  async (payload: MenuCategoryPayload, thunkApi) => {
    console.log(payload);
    // const api = await fetch(`${config.apiBaseUrl}/menu-category`, {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    // const menuCategories = await api.json();
    // thunkApi.dispatch(setMenuCategory(menuCategories));
  }
);
export const menuCategorySlice = createSlice({
  name: "menuCategorySlice",
  initialState,
  reducers: {
    setMenuCategory: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuCategory } = menuCategorySlice.actions;
export default menuCategorySlice.reducer;
