import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // slice 이름
  initialState: {
    value: 0,
  }, // 초기 값
  reducers: {
    // 리듀서 함수 //우리가 코딩한 건 여기.. 나머지는 라이브러리...
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {state.value += action.payload;},
    },
});

// Action 생성자 함수(increment, decrement) export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// store에서 사용할 수 있도록 export
export default counterSlice.reducer;
