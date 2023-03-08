import {useState} from "react";
import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from 'nanoid'

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
        <form onSubmit={handleFormSubmit}>
            <label>Question
                <input  
                type="text"   
                name="question"
                value={questionForm.question}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label>Topic of question
                <select required
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
            <label>Answer option 1
                <input 
                type="text"
                name="answer1"
                value={questionForm.answer1}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label><input type="radio" name="correctAnswer" value="answer1" id="answer1" onChange={handleChangeForm}></input>Correct answer</label>
            <label>Answer option 2
                <input 
                type="text"
                name="answer2"
                value={questionForm.answer2}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label><input type="radio" name="correctAnswer" value="answer2" id="answer2" onChange={handleChangeForm}></input> Correct answer</label>
            <label>Answer option 3
                <input 
                type="text"
                name="answer3"
                value={questionForm.answer3}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label><input type="radio" name="correctAnswer" value="answer3" id="answer3" onChange={handleChangeForm}></input>Correct answer</label>
            <label>Answer option 4
                <input 
                type="text"
                name="answer4"
                value={questionForm.answer4}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label><input type="radio" name="correctAnswer" value="answer4" id="answer4" onChange={handleChangeForm}></input>Correct answer</label>
            <button type='submit'>Add question</button>
        </form>)
        
    }

export default QuestionForm
