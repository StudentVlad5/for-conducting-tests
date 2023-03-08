import { createSlice } from "@reduxjs/toolkit";

const statistics = {
  css: { total: 0, success: 0 },
  html: { total: 0, success: 0 },
  js: { total: 0, success: 0 },
  react: { total: 0, success: 0 },
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: statistics,
  reducers: {
    addCourseStatistics: (state, { payload }) => ({
      ...state,
      ...payload
    }),
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { setStatistics } = statisticsSlice.actions;
export const statisticsReducer = statisticsSlice.reducer;
