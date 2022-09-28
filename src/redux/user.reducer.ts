import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../@types";
import { firestore } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeLoading, setLoading } from "./loading.reducer";

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

export const fetchUser = createAsyncThunk<IUser | null, string>("user/fetchUser", async (phone, { dispatch }) => {
  dispatch(setLoading());
  const q = query(userCollectionRef, where("phone", "==", phone));
  const data = await getDocs(q);
  dispatch(removeLoading());
  if (data.docs && data.docs.length) {
    const userInfo = data.docs[0].data() as IUser;
    return { ...userInfo, id: data.docs[0].id, birthday: (userInfo.birthday as any).toDate().toISOString() } as IUser;
  }
  return null;
});

export const removeUser = createAsyncThunk("user/logout", async () => {
  await AsyncStorage.clear();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
        console.log("Rejected", action);
        state.status = EFetchStatus.FAILED;
      })
      .addCase(removeUser.pending, (state) => {
        state.status = EFetchStatus.PENDING;
      })
      .addCase(removeUser.fulfilled, (state) => {
        state.user = null;
        state.status = EFetchStatus.SUCCESS;
      });
  },
});

// export const {  } = userSlice.actions;

export default userSlice.reducer;
