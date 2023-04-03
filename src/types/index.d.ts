import { Timestamp } from "firebase/firestore";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type Color =
  | "primary"
  | "primaryLight"
  | "blue"
  | "black"
  | "background"
  | "gray"
  | "grayDark"
  | "grayLight"
  | "line"
  | "lineLight"
  | "white"
  | "red"
  | "redLight";

interface UserModel {
  email: string;
  displayName: string;
  uid: string;
  profileImgUrl: string;
  createdAt: Timestamp;
}

interface TodoModel {
  userId: string;
  createdAt: Timestamp;
  content: string;
  complitedAt: Date;
  author: string;
  authenticationMethod: "image" | "url";
}
