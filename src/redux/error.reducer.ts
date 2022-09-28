import { Action, createAction, createSlice } from "@reduxjs/toolkit";

export interface IErrorState {
  show: boolean;
  text: string;
}

const initialState: IErrorState = {
  show: false,
  text: "",
};

export const setError = createAction("setError");

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    removeError(state) {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("setError", (state, action: any) => {
      state.show = true;
      state.text = action.payload.text;
      
    });
  },
});

export const { removeError } = errorSlice.actions;

export default errorSlice.reducer;
