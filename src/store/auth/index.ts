import {create} from 'zustand';

export interface IAuthState {
  isAuthenticated: boolean;
}

export const useAuth = create<IAuthState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

