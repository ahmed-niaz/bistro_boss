import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google log in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user > ", currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    updateUserProfile,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseProvider;
