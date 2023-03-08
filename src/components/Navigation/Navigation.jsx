import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectIsStateChange} from '../../redux/auth/selectors';
import css from "./Navigation.module.css";
const Navigation = () =>{
    const isLogin = useSelector(selectIsStateChange);
    return (
        <ul className={`${css.Nav__container} ${css.light}`}>
           <li><NavLink to={'/'} className={css.Nav__button} style={({ isActive }) => isActive
      ? {
          color: '#DED93E',
          background: '#2C5E1A',
        }
      : { background: '#13aa52' }
  }>Home</NavLink></li>
           {isLogin && <li><NavLink to={'questionform'} className={css.Nav__button} style={({ isActive }) => isActive
      ? {
          color: '#DED93E',
          background: '#2C5E1A',
        }
      : { background: '#13aa52' }
  }>Question Form</NavLink></li>}
           {isLogin && <li><NavLink to={'tests'} className={css.Nav__button} style={({ isActive }) => isActive
      ? {
          color: '#DED93E',
          background: '#2C5E1A',
        }
      : { background: '#13aa52' }
  }>Start testes</NavLink></li>}
        </ul>
    )
}

export default Navigation