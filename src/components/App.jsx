import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchContacts } from "redux/operations";
import { refreshUser } from "../redux/auth/operations"
import QuestionForm from './QuestionForm/QuestionForm';


export default function App () {
const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(fetchContacts());
    // }, [dispatch]);

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}>
  
  <div className="list_section">
  <QuestionForm/>
  </div>
    </div>
    )
  }
  