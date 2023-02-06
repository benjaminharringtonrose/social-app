import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import { atom, selector, useSetRecoilState } from "recoil";

interface IAuthState {
  user?: User;
}

const auth = getAuth();

export const authState = atom<IAuthState>({
  key: 'authState',
  dangerouslyAllowMutability: true,
  default: {
    user: undefined,
  },
});

export const userSelector = selector({
  key: 'userSelector',
  dangerouslyAllowMutability: true,
  get: ({get}) => get(authState).user,
});


export const useAuthListener = () => {
  const setAuthState = useSetRecoilState(authState)
  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState((prevState) => ({ ...prevState, user }));
      } else {
        setAuthState((prevState) => ({ ...prevState, user: undefined }));
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);
};

