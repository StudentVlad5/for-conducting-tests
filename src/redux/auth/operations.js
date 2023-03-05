import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/config";
import { updateProfile } from "firebase/auth";
import { authSlice } from "./slice";

export const authSignUpUser = (userSignIn) => async (dispatch, getState) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      userSignIn.email,
      userSignIn.password
    );
    console.log("user", user);
    const currentUser = auth.currentUser;
    console.log("currentUser", currentUser);
    const userID = user.user.uid;
    console.log("userID", userID);
    await updateProfile(currentUser, { displayName: userSignIn.name });

    await dispatch(
      authSlice.actions.updateUserProfile({
        userId: currentUser.uid,
        nickName: currentUser.displayName,
        stateChange: true,
        isRefreshing: true,
      })
    );
  } catch (error) {
    console.log("error", error);
    alert("Помилка", error.message);
  }
};

export const logIn = (userSignIn) => async (dispatch, getState) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      userSignIn.email,
      userSignIn.password
    );
    console.log("user", user);
    const currentUser = auth.currentUser;
    await dispatch(
      authSlice.actions.updateUserProfile({
        userId: currentUser.uid,
        nickName: currentUser.displayName,
        stateChange: true,
        isRefreshing: true,
      })
    );
  } catch (error) {
    console.log("error", error);
    alert("Помилка", error.message);
  }
};

export const logOut = async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    console.log("error", error);
    alert("Помилка", error.message);
  }
};

export const refreshUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      try {
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            nickName: user.displayName,
            stateChange: true,
            isRefreshing: true,
          })
        );
      } catch (error) {
        console.log("error", error);
        alert("Помилка", error.message);
      }
    }
  });
};
