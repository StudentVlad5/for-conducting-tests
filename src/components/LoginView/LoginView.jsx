import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
    MDBCol,
} from 'mdb-react-ui-kit';
import { FaEnvelope, FaLock, FaUnlockAlt } from 'react-icons/fa';
import css from "./LoginView.module.css";

function LoginView() {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const dispatch = useDispatch();

    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const handleEmailChange =(evnt)=>{
        setEmailInput(evnt.target.value);
    }
    
    const togglePassword =(e)=>{
        if(passwordType==="password")
        {
        setPasswordType("text")
        return;
        }
        setPasswordType("password")
    }
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        
        dispatch(
            logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };


  return (
    <form className={css.signIn__Container} onSubmit={handleSubmit}>
        <MDBCol className={css.form__container}>
            <p className={css.formTitle}>Log in</p>
                <div className={css.flexrow}>
                    <label className={css.title__label}>
                        <div>Your Email
                            <div className={css.item__container}>
                                <FaEnvelope size="25"/>
                                <input className={css.input_active} id='envelope_log' type='email' name='email' value={emailInput} onChange={handleEmailChange}/>
                            </div>
                        </div>
                    </label>
                </div>
                <div className={css.flexrow}>
                    <label className={css.title__label}>
                        <div>Password
                            <div className={css.item__container}>
                                {passwordType==="password"? <FaLock size="25" onClick={togglePassword}/>:<FaUnlockAlt size="25" onClick={togglePassword}/> }
                                <input className={css.input_active} id='password_log' type={passwordType} name='password' value={passwordInput} onChange={handlePasswordChange}/>
                            </div>
                        </div>
                </label>
                </div>
            <button type="submit" className={css.form_submit}>Log in</button>
        </MDBCol>
    </form>
  );
}

export default LoginView;