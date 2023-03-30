import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    email: "",
    nickname: "",
    profileImage: "../assets/images/defaultImage.png", //왜 안되지...?
  },
});
