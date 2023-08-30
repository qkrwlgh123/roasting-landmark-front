import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userInfoAtom = atom({
  key: 'userInfo',
  default: {
    username: '',
    profileImage: '',
    profileDescription: '',
  },
  effects_UNSTABLE: [persistAtom],
});
