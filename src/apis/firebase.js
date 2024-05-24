import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import Constants from "../utils/Constants";

export const signUpUser = (userDetails, setErrorMessage, hooks) => {
  const { email, password, displayName, photoURL } = userDetails;
  const { dispatch } = hooks;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const isupdateSuccess = updateUserProfile(user, {
        displayName,
        photoURL,
      });
      if (isupdateSuccess) {
        dispatch(addUser(auth.currentUser));
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
};

export const signInUser = (credentials, setErrorMessage, hooks) => {
  const { email, password } = credentials;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
};

export const updateUserProfile = (user, updatedProfile) => {
  updateProfile(user, updatedProfile)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

export const onAuthStateChange = (hooks) => {
  const { dispatch, navigate } = hooks;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(addUser({ uid, email, displayName, photoURL }));
      navigate(Constants.routes.browse);
    } else {
      dispatch(removeUser());
      navigate(Constants.routes.body);
    }
  });
};

export const userSignOut = (hooks) => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
