import { User } from "firebase/auth";
import { atom, useRecoilState } from "recoil";

interface IAuthState {
  user?: User;
}

const authState = atom<IAuthState>({
  key: 'authState',
  default: {
    user: undefined,
  },
});

export const useAuth = () => {
  const [auth, setAuthState] = useRecoilState(authState);

  const setUser = (user: User) => {
    setAuthState((prevState) => ({ ...prevState, user }));
  };

  return {
    auth,
    setUser
  }
};

