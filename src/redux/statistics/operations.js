import { statisticsSlice } from "../statistics/statisticsSlice";
export const addStatistic = (b) => (dispatch, getState) => {
  console.log(getState);
    dispatch(
    statisticsSlice.actions.addCourseStatistics({
      ...b,
    })
  );
};
