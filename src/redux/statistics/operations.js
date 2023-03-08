import { statisticsSlice } from "../statistics/statisticsSlice";
export const addStatistic = (b) => (dispatch, getState) => {

    dispatch(
    statisticsSlice.actions.addCourseStatistics({
      ...b,
    })
  );
};
