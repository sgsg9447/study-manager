import { Timestamp } from "firebase/firestore";

export default interface TodoModel {
   userId: string;
  createdAt: Timestamp;
  content: string;
  complitedAt: Date;
  author: string;
  authenticationMethod: "photo" | "url";
}
