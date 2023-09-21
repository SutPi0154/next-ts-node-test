import { configureStore } from "@reduxjs/toolkit";
import MenuCategoryReducer from "./slices/menuCategory";
import MenuReducer from "./slices/menuSlice";
export const store = configureStore({
  reducer: {
    menus: MenuReducer,
    menuCategories: MenuCategoryReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
