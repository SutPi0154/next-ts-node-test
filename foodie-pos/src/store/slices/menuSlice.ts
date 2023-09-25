import config from "@/config";
import { CreateMenuType, MenuState, UpdateMenuPayload } from "@/types/menu";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MenuState = {
  items: [],
  isLoading: false,
  error: null,
};

export const createMenu = createAsyncThunk(
  "menu/createMenu",
  async (payload: CreateMenuType, thunkApi) => {
    const api = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const menus = await api.json();
    thunkApi.dispatch(setMenus(menus));
  }
);
export const UpdateMenuThunk = createAsyncThunk(
  "menu/updateMenu",
  async (payload: UpdateMenuPayload, thunkApi) => {
    console.log(payload);
    // const api = await fetch(`${config.apiBaseUrl}/menu`, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    // const menus = await api.json();
    // thunkApi.dispatch(setMenus(menus));
  }
);
export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setMenus: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenus } = menuSlice.actions;
export default menuSlice.reducer;
