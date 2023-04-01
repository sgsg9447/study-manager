import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { appAuth } from "../firebase/config";
import { userAtom } from "../store/userAtom";

export default function useLogin() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [loginUser, setLoginUser] = useRecoilState(userAtom);

  const login = (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.uid) {
          setLoginUser(user);
        } else {
          setLoginUser(null);
        }
        setError(null);
        setIsPending(false);
        if (!user) {
          throw new Error("로그인 실패");
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
        setLoginUser(null);
      });
  };

  return { error, isPending, loginUser, login };
}
