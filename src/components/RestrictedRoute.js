import { useSelector } from "react-redux";
import {selectIsStateChange} from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
 const isLogin = useSelector(selectIsStateChange);
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};