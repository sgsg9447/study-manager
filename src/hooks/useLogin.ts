import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRecoilState } from "recoil";
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
        console.log(user);
        console.log(user.email);
        console.log(user.displayName);

        if (user.email && user.displayName) {
          setLoginUser({
            ...loginUser,
            email: user.email,
            nickname: user.displayName,
          });
        } else {
          setLoginUser({ email: "", nickname: "", profileImage: "" });
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
      });
  };
  return { error, isPending, login };
}
