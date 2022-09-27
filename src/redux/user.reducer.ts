import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../@types";
import { firestore } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const userCollectionRef = collection(firestore, "users");

export enum EFetchStatus {
  PENDING,
  SUCCESS,
  FAILED,
}

export interface IUserState {
  user: IUser | null;
  status: EFetchStatus | null;
}

const initialState: IUserState = {
  user: null,
  status: null,
};

export const fetchUser = createAsyncThunk<IUser | null, string>("user/fetchUser", async (phone) => {
  const q = query(userCollectionRef, where("phone", "==", phone));
  const data = await getDocs(q);

  if (data.docs && data.docs.length) {
    return { ...data.docs[0].data(), id: data.docs[0].id } as IUser;
  }
  return null;
  // return users[0];
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = EFetchStatus.PENDING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = EFetchStatus.SUCCESS;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("Rejected");
        state.status = EFetchStatus.FAILED;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
