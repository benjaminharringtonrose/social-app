import { useState, useCallback } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth/react-native';

import { ILoginFormProps, ISignUpFormProps } from "../types";

export const useAuth = () => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);


  const onEmailPasswordLogin = useCallback(async (values: ILoginFormProps) => {
    try {
      setLoadingLogin(true);
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingLogin(false);
    }
  }, []);

  const onEmailPasswordSignup = useCallback(async (values: ISignUpFormProps) => {
    try {
      setLoadingSignUp(true);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingSignUp(false);
    }
  }, []);

  const onSignout = useCallback(async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch(e) {
      console.warn(e);
    }
  }, []);

  return {
    loadingLogin,
    loadingSignUp,
    onEmailPasswordLogin,
    onEmailPasswordSignup,
    onSignout,
  }
}