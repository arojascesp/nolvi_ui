import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../reducers/uiReducer";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
// ...

export const store: ToolkitStore = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
