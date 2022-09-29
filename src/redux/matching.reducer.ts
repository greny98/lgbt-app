import { createSlice } from "@reduxjs/toolkit";

export interface IMatchingState {
  newMatching: boolean;
}

const initialState: IMatchingState = {
  newMatching: false,
};

const matchingSlice = createSlice({
  name: "matching",
  initialState,
  reducers: {
    setNewMatching(state) {
      state.newMatching = true;
    },
    removeNewMatching(state) {
      state.newMatching = false;
    },
  },
});

export const { setNewMatching, removeNewMatching } = matchingSlice.actions;

export default matchingSlice.reducer;
