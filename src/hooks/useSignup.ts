import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { appAuth, db } from "../firebase/config";
import { userAtom } from "../store/userAtom";

export default function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [loginUser, setLoginUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const signup = (email: string, password: string, displayName: string) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(appAuth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        if (!user) {
          throw new Error("회원가입 실패");
        }
        updateProfile(appAuth.currentUser!, { displayName })
          .then(() => {
            const colRef = collection(db, "users");

            return addDoc(colRef, {
              uid: user.uid,
              displayName: user.displayName ?? "",
              email: user.email ?? "",
              profileImgUrl: user.photoURL ?? "",
              createdAt: Timestamp.fromDate(new Date()),
            });
          })
          .then((userData) => {
            console.log("hello>>", userData);
            setLoginUser(user);
            navigate("/room");
            setError(null);
            setIsPending(false);
          })
          .catch((error) => {
            console.error("error!", error);
            setError(error.message);
            setIsPending(false);
          });
      }
    );
  };
  return { error, isPending, signup };
}
