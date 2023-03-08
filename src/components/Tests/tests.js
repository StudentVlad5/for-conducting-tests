import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStatistic } from "../../redux/statistics/operations";
import { getStatistics } from "../../redux/statistics/selectors";
import { Statistics } from "components/Statistics/statistics";

import css from "./tests.module.css";

const Tests = () => {
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [list, setList] = useState("");
  const [course, setCourse] = useState("");
  const state = useSelector(getStatistics);



  const dataBase = getDatabase();
  const dispatch = useDispatch();

  useEffect(() => {
    const getTests = (course) => {
      // отримати перелік питань з БД
      const starCountRefQuestion = ref(dataBase, course + "/");
      onValue(starCountRefQuestion, (snapshot) => {
        const data = snapshot.val();
        let list = [];
        if (data !== undefined && data !== null) {
          list = Object.values(data);
        }
        // listOfQuestion = (list.map((key) => key));
        setList(list);
      });
    };

    getTests(course);
  }, [course, dataBase]);

  const handleanswer = (e) => {
    let total = state[`${course}`].total;
    let success = state[`${course}`].success;
   console.log("course", course)
    total = total + 1;
    if (e.target.value === list[numberOfQuestion].correctAnswer) {
    success++;
    }
    console.log("total", total, "success", success);
    dispatch(addStatistic({ [`${course}`]: { total: total, success: success } }));
    setNumberOfQuestion((pr) => pr + 1);
  };

  return (
    <div className={css.wrap__container}>
      <section className={css.course__container}>
        <div className={css.courseName} onClick={() => setCourse("react")}>
          react
        </div>
        <div className={css.courseName} onClick={() => setCourse("js")}>
          js
        </div>
        <div className={css.courseName} onClick={() => setCourse("css")}>
          css
        </div>
        <div className={css.courseName} onClick={() => setCourse("html")}>
          html
        </div>
        <Statistics />
      </section>
      {numberOfQuestion >= list.length && (
        <h4>Це власне було останнє питання цього курсу.</h4>
      )}
      {list.length !== 0 &&
        course !== "" &&
        numberOfQuestion < list.length && (
          <section className={css.question__container}>
            <div className={css.question}>
              {list[numberOfQuestion].question}
            </div>
            <div>
              <div>
                <button
                  className={css.answer__button}
                  value="answer1"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer1}
                </button>
                <button
                  className={css.answer__button}
                  value="answer2"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer2}
                </button>
              </div>
              <div>
                <button
                  className={css.answer__button}
                  value="answer3"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer3}
                </button>
                <button
                  className={css.answer__button}
                  value="answer4"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer4}
                </button>
              </div>
            </div>
          </section>
        )}{" "}
    </div>
  );
};
export default Tests;
