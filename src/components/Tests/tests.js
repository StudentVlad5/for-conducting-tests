import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStatistic } from "../../redux/statistics/operations";
import { getStatistics } from "../../redux/statistics/selectors";
import { Statistics } from "components/Statistics/statistics";
import css from "./tests.module.css";

import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: true,
  position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};
Vue.use(Toast, options);

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

    total = total + 1;
    if (e.target.value === list[numberOfQuestion].correctAnswer) {
      Vue.$toast.success("Correct answer");
      success++;
    } else {Vue.$toast.error("Ooops. wrong answer", {color: 'red'});}

    dispatch(
      addStatistic({ [`${course}`]: { total: total, success: success } })
    );
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
      </section>
      <section className={css.question__container}>
        {numberOfQuestion >= list.length && (
          <section className={css.last__container}>
            <h4>Це власне було останнє питання цього курсу.</h4>
          </section>
        )}
        {list.length !== 0 && course !== "" && numberOfQuestion < list.length && (
          <div>
            <div className={css.question}>
              {list[numberOfQuestion].question}
            </div>
            <div className={css.answer__container}>
              {list[numberOfQuestion].answer1 !== " " && (
                <button
                  className={css.answer__button}
                  value="answer1"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer1}
                </button>
              )}
              {list[numberOfQuestion].answer2 !== " " && (
                <button
                  className={css.answer__button}
                  value="answer2"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer2}
                </button>
              )}
              {list[numberOfQuestion].answer3 !== " " && (
                <button
                  className={css.answer__button}
                  value="answer3"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer3}
                </button>
              )}
              {list[numberOfQuestion].answer4 !== " " && (
                <button
                  className={css.answer__button}
                  value="answer4"
                  type="button"
                  onClick={(e) => handleanswer(e)}
                >
                  {list[numberOfQuestion].answer4}
                </button>
              )}
            </div>
          </div>
        )}
      </section>
      <section>
        <Statistics />
      </section>
    </div>
  );
};
export default Tests;
