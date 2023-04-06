import { Timestamp } from "firebase/firestore";

export interface TodoModel {
  id: string;
  createdAt: Timestamp;
  content: string;
  complitedAt: Timestamp;
  uid: string;
  authenticationMethod: "image" | "url";
  authenticationContent: string;
}

export interface TodoModelConvert {
  id: string;
  createdAt: Date;
  content: string;
  complitedAt: Date;
  uid: string;
  authenticationMethod: "image" | "url";
  authenticationContent: string;
}
