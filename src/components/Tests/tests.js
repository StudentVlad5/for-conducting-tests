import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import css from "./tests.module.css";

const Tests = () => {
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [list, setList] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    getTests(course);
  }, [course]);

  const dataBase = getDatabase();

  let listOfQuestion = [];
  const getTests = (course) => {
    // отримати перелік питань з БД
    const starCountRefQuestion = ref(dataBase, course + "/");
    onValue(starCountRefQuestion, (snapshot) => {
      const data = snapshot.val();
      let list = [];
      if (data !== undefined && data !== null) {
        list = Object.values(data);
      }
      listOfQuestion = list.map((key) => key);
      setList(listOfQuestion);
    });
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
      {list.length !== 0 && course !== "" && (
        <section className={css.question__container}>
          <div className={css.question}>{list[numberOfQuestion].question}</div>
          <div>
            <div>
              <button className={css.answer__button} type="button">
                {list[numberOfQuestion].answer1}
              </button>
              <button className={css.answer__button} type="button">
                {list[numberOfQuestion].answer2}
              </button>
            </div>
            <div>
              <button className={css.answer__button} type="button">
                {list[numberOfQuestion].answer3}
              </button>
              <button className={css.answer__button} type="button">
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
