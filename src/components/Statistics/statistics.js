import { useSelector } from "react-redux";
import { getStatistics } from "../../redux/statistics/selectors";
import css from "./statistics.module.css"

export const Statistics = () => {
  const statistics = useSelector(getStatistics);

  return (
    <div className={css.statistics__container}>
      <div className={css.statistics__border}>
      <h3>Statistics</h3>
      <h4>CSS</h4>
        <span>
        {statistics.css.total !== 0
          ? Math.round(statistics.css.success / statistics.css.total * 100)
          : 0}
      </span>
      <h4>HTML</h4><span>
        {statistics.html.total !== 0
          ? Math.round(statistics.html.success / statistics.html * 100)
          : 0}
      </span>
      <h4>JS</h4><span>
        {statistics.js.total !== 0
          ? Math.round(statistics.js.success / statistics.js.total * 100)
          : 0}
      </span>
      <h4>REACT</h4><span>
        {statistics.react.total !== 0
          ? Math.round(statistics.react.success / statistics.react.total * 100)
          : 0}
      </span>
      </div>
    </div>
  );
};
