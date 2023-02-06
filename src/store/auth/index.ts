import { User } from "firebase/auth";
import { atom, selector, useRecoilState } from "recoil";

interface IAuthState {
  user?: User;
}

const authState = atom<IAuthState>({
  key: 'authState',
  dangerouslyAllowMutability: true,
  default: {
    user: undefined,
  },
});

const userSelector = selector({
  key: 'userSelector',
  get: ({get}) => get(authState).user,
});


export const useAuth = () => {
  const [auth, setAuthState] = useRecoilState(authState);

  const setUser = (user?: User) => {
    setAuthState((prevState) => ({ ...prevState, user }));
  };

  return {
    auth,
    setUser
  }
};

