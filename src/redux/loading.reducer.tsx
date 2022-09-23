import { createSlice } from "@reduxjs/toolkit";

export interface ILoadingState {
  loading: boolean;
}

const initialState: ILoadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    removeLoading(state) {
      state.loading = false;
    },
  },
});

export const { removeLoading, setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
