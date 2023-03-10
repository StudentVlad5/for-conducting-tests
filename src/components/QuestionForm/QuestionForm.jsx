import {useState} from "react";
import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from 'nanoid';
import { MDBCol } from 'mdb-react-ui-kit';
import css from "./QuestionForm.module.css";

const initial_state = {
    question: "",
    topic: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctAnswer:"",
}
const dataBase = getDatabase()
function  QuestionForm  () {

    const [questionForm, setQuestionForm] = useState(initial_state);

function handleChangeForm  (event) {
    const {name, value} = event.target;
    console.log(name, value);
    return setQuestionForm(questionForm=>({...questionForm, [name]:value}));
}

const handleFormSubmit  = async(event) => {
    event.preventDefault();
    console.log(questionForm);
    // додає питання до БД 
    const id = nanoid();
      set(ref(dataBase, questionForm.topic+'/'+ id), {
        ...questionForm, id
      });

    resetForm ();

}


function resetForm () {
    setQuestionForm(initial_state)
}
      return(
        <form onSubmit={handleFormSubmit} className={css.form__Container}>
            <MDBCol className={css.form__container}>
            <p className={css.formTitle}>Add question form</p>
            <div className={css.flexrow}>
            <label className={`${css.title__label} ${css.title__label_topic}`}>Topic of question
                <select required
                className={css.select_course}
                name="topic"
                id ="topic"
                value={questionForm.topic}
                onChange = {handleChangeForm}
                >
                <option value="">--Please choose an option--</option>
                <option value="react">React</option>
                <option value="js">JS</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                </select>
            </label>
            </div>
            <div className={css.flexrow}>
   
            <label className={css.title__label}>Question
                <input  className={css.input_active}
                type="text"   
                name="question"
                value={questionForm.question}
                onChange = {handleChangeForm}
                required/>
            </label>
            </div>
            
            <div className={css.grid__container}>
                <div className={css.grid_container1}>
                    <div className={css.flexrow}>
                        <label className={css.title__label}>Answer option 1
                            <div className={css.item__container}>
                                <input className={css.input_active}
                                type="text"
                                name="answer1"
                                value={questionForm.answer1}
                                onChange = {handleChangeForm}
                                required/>
                            </div>
                        </label>
                    </div>
                    <div className={css.flexrow_check}>
                        <label className={css.title__label_check}>
                            <input className={css.title__input_check} type="radio" name="correctAnswer" value="answer1" id="answer1" onChange={handleChangeForm}></input>Correct answer</label>
                    </div>
                </div>

                <div className={css.grid_container2}>
                    <div className={css.flexrow}>
                        <label className={css.title__label}>Answer option 2
                            <div className={css.item__container}>
                                <input className={css.input_active}
                                type="text"
                                name="answer2"
                                value={questionForm.answer2}
                                onChange = {handleChangeForm}
                                required/>
                            </div>
                        </label>
                    </div>
                    <div className={css.flexrow_check}>
                        <label className={css.title__label_check}>
                            <input type="radio" className={css.title__input_check} name="correctAnswer" value="answer2" id="answer2" onChange={handleChangeForm}></input> Correct answer</label>
                    </div>
                </div>

                <div className={css.grid_container3}>
                    <div className={css.flexrow}>
                        <label className={css.title__label}>Answer option 3
                            <div className={css.item__container}>
                                <input className={css.input_active}
                                type="text"
                                name="answer3"
                                value={questionForm.answer3}
                                onChange = {handleChangeForm}
                                required/>
                            </div>
                        </label>
                    </div>
                    <div className={css.flexrow_check}>
                        <label className={css.title__label_check}>
                            <input type="radio"  className={css.title__input_check} name="correctAnswer" value="answer3" id="answer3" onChange={handleChangeForm}></input>Correct answer</label>
                    </div>
                </div>

                <div className={css.grid_container4}>
                    <div className={css.flexrow}>
                        <label className={css.title__label}>Answer option 4
                            <div className={css.item__container}>
                                <input 
                                className={css.input_active}
                                type="text"
                                name="answer4"
                                value={questionForm.answer4}
                                onChange = {handleChangeForm}
                                required/>
                            </div>
                        </label>
                    </div>
                    <div className={css.flexrow_check}>
                        <label className={css.title__label_check}>
                            <input type="radio" className={css.title__input_check} name="correctAnswer" value="answer4" id="answer4" onChange={handleChangeForm}></input>Correct answer</label>
                    </div>
                </div>
                
            </div>
            <button type='submit' className={css.form_submit}>Add question</button>
            </MDBCol>
        </form>)
        
    }

export default QuestionForm
