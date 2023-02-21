import { useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { atom, selector, useSetRecoilState } from "recoil";

import { AuthEnum } from "../../types";

interface IAuthState {
  user?: User;
  state?: AuthEnum;
}

const auth = getAuth();

export const authState = atom<IAuthState>({
  key: 'authState',
  dangerouslyAllowMutability: true,
  default: {
    user: undefined,
    state: AuthEnum.None

  },
});

export const userSelector = selector({
  key: 'userSelector',
  dangerouslyAllowMutability: true,
  get: ({get}) => get(authState).user,
});

export const authStateSelector = selector({
  key: 'authStateSelector',
  dangerouslyAllowMutability: true,
  get: ({get}) => get(authState).state,
});


export const useAuthListener = () => {
  const setAuthState = useSetRecoilState(authState)
  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState((prevState) => ({ 
          ...prevState, 
          user, 
          state: AuthEnum.Authenticated 
        }));
      } else {
        setAuthState((prevState) => ({ 
          ...prevState, 
          user: undefined,  
          state: AuthEnum.Unauthenticated
        }));
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);
};

