import {create} from 'zustand';

import {EmailState} from '@/types';

export const useEmailStore = create<EmailState>()((set) => ({
  email: '',
  checkedEmail: false,
  setEmail: (email) => set({email}),
  setCheckedEmail: (checked) => set({checkedEmail: checked}),
  clearEmail: () => set({email: ''}),
}));
