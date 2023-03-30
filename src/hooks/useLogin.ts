import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";

export default function useLogin() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = (email: string, password: string) => {
    setError(null);
    setIsPending(true);
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError(null);
        setIsPending(false);
        if (!user) {
          throw new Error("로그인 실패");
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  };
  return { error, isPending, login };
}
