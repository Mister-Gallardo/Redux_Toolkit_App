import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Асинхронный ВНЕШНИЙ экшен
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.json();
  }
);

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
  }
);

// Тип состояния
interface IUserState {
  user: { id: string; name: string; email: string } | null;
  allUsers: { id: string; name: string; email: string }[];
  loading: boolean;
  error: string | null;
}

// Начальное состояние
const initialState: IUserState = {
  user: null,
  allUsers: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // экшены для вывода одного пользователя
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Произошла ошибка";
      })

      // экшены для вывода всех пользователей
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Произошла ошибка";
      });
  },
});

export default userSlice.reducer;
