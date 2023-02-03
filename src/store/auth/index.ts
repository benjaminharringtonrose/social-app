import { atom, useRecoilState } from "recoil";

interface IAuthState {
  isAuthenticated: boolean;
}

const authState = atom<IAuthState>({
  key: 'authState',
  default: {
    isAuthenticated: false
  },
});

export const useAuth = () => {
  const [auth, setAuthState] = useRecoilState(authState);

  const setIsAuthenticated = (isAuthenticated: boolean) => {
    setAuthState((prevState) => ({ ...prevState, isAuthenticated }));
  };

  return {
    auth,
    setIsAuthenticated,
  }
};

