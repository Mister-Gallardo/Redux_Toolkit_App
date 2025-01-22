import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// создание среза состояния
const counterSlice = createSlice({
  // уникальный идентификато
  // с помощью него автоматически создаются
  // уникальные типы для экшенов, основанные на
  // имени среза ( name ) и названии редюсера
  // предотвращение конфликтов между срезами
  // использование в Redux Devtools
  // автоматическое использование в createAsyncThunk
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// эскпортируем экшены
export const { increment, decrement, setByAmount } = counterSlice.actions;

// экспортриуем редюсер
export default counterSlice.reducer;
