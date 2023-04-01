import { atom } from "recoil";
import { User } from "firebase/auth";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userAtom = atom<User | null>({
  key: "userAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
