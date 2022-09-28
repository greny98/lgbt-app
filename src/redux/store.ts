import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "./error.reducer";
import loadingReducer from "./loading.reducer";
import userReducer from "./user.reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
