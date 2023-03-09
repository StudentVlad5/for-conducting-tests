import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () =>{
    return (
        <ul className={css.AuthNav__container}>
           <li><NavLink to={'register'} className={css.AuthNav__button} style={({ isActive }) => isActive
      ? {
          color: '#DED93E',
          background: '#2C5E1A',
        }
      : { background: '#13aa52' }}>Registration</NavLink></li>
           <li><NavLink to={'login'} className={css.AuthNav__button} style={({ isActive }) => isActive
      ? {
          color: '#DED93E',
          background: '#2C5E1A',
        }
      : { background: '#13aa52' }}>Log in</NavLink></li>
        </ul>
    )
}

export default AuthNav