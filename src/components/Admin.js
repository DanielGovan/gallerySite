import React from "react";
import { projectAuth } from "../firebase/config";

const Admin = () => {
  const signInWithGoogle = () => {
    const provider = new projectAuth.GoogleAuthProvider();
    projectAuth.signInWithPopup(provider);
  };
  const signIn = () => {
    return <button onClick={signInWithGoogle}>Sign in with Google</button>;
  };
  const signOut = () => {
    return <button onClick={() => projectAuth.signOut()}>Sign Out</button>;
  };

  return <button onClick={handleClick}>Sign in with Google</button>;
};

export default Admin;
