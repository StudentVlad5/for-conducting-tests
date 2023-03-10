import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import css from "./UserMenu.module.css";

const UserMenu = () =>{
const dispatch = useDispatch();
const name = useSelector(selectUser)

const handleOut = (e) => {
      (
        logOut(dispatch)
      );
    };

 return (
        <ul className={css.userMenu__container}>
           <li className={css.userMenu__wellcome}>Wellcome {name}</li>
           <li><Link to={'/'} className={css.userMenu__logout} onClick={()=>handleOut()}>Log out</Link></li>
        </ul>
    )
}

export default UserMenu