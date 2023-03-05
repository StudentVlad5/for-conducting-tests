import {useState} from "react";

const initial_state = {
    question: "",
    topic: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctAnswer:"",
}

function  QuestionForm  () {

    const [questionForm, setQuestionForm] = useState(initial_state);

function handleChangeForm  (event) {
    const {name, value} = event.target;
    console.log(name, value);
    return setQuestionForm(questionForm=>({...questionForm, [name]:value}));
}

function handleFormSubmit  (event)  {
    event.preventDefault();
    console.log(questionForm)
//     const isValidateForm =  validateForm();
//     if(isValidateForm){
//     let newContact = {name: initial_state.name, number: initial_state.phone};
    resetForm ();
//     dispatch(addContact(newContact));
// }
}

// function validateForm () {
//     if (!initial_state.name || !initial_state.phone){
//         alert('Some field is empty');
//         return false}
//     else if ([...contacts].filter(key=>key.name === initial_state.name).length > 0){
//          alert("contact already exist");
//     return false}
//     else return true
//     }

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
            <label>
                <input 
                type="text"
                name="topic"
                value={questionForm.topic}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label>
                <input 
                type="text"
                name="answer1"
                value={questionForm.answer1}
                onChange = {handleChangeForm}
                required/>
            </label>
            <input type="radio" name="correctAnswer" value="answer1" id="answer1" onChange={handleChangeForm}></input>
            <label>
                <input 
                type="text"
                name="answer2"
                value={questionForm.answer2}
                onChange = {handleChangeForm}
                required/>
            </label>
            <input type="radio" name="correctAnswer" value="answer2" id="answer2" onChange={handleChangeForm}></input>
            <label>
                <input 
                type="text"
                name="answer3"
                value={questionForm.answer3}
                onChange = {handleChangeForm}
                required/>
            </label>
            <input type="radio" name="correctAnswer" value="answer3" id="answer3" onChange={handleChangeForm}></input>
            <label>
                <input 
                type="text"
                name="answer4"
                value={questionForm.answer4}
                onChange = {handleChangeForm}
                required/>
            </label>
            <input type="radio" name="correctAnswer" value="answer4" id="answer4" onChange={handleChangeForm}></input>
            <button type='submit'>Add contact</button>
        </form>)
        
    }

export default QuestionForm
