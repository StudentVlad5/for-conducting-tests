import { useSelector } from "react-redux";
import { getStatistics } from "../../redux/statistics/selectors";

export const Statistics = () => {
  const statistics = useSelector(getStatistics);
  return (
    <div>
      <h5>Statistics</h5>
      <p>
        CSS:{" "}
        {statistics.css.total !== 0
          ? statistics.css.success / statistics.css.total
          : 0}
      </p>
      <p>
        HTML:{" "}
        {statistics.html.total !== 0
          ? statistics.html.success / statistics.html.total
          : 0}
      </p>
      <p>
        JS:{" "}
        {statistics.js.total !== 0
          ? statistics.js.success / statistics.js.total
          : 0}
      </p>
      <p>
        REACT{" "}
        {statistics.react.total !== 0
          ? statistics.react.success / statistics.react.total
          : 0}
      </p>
    </div>
  );
};
