import { Timestamp } from "firebase/firestore";

export default interface UserModel {
    email: string;
    displayName: string;
    uid: string;
    profileImgUrl: string;
    createdAt: Timestamp;
  }
  