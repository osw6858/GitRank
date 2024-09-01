import {create} from 'zustand';

import {User, UserStoreState} from '@/types';

export const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user: User) => set({user, isLoggedIn: true}),
  logout: () => set({user: null, isLoggedIn: false}),
  updateUser: (userData: Partial<User>) =>
    set((state) => ({
      user: state.user ? {...state.user, ...userData} : null,
    })),
}));
