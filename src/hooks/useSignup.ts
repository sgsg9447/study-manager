import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";

export default function Signup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = (email: string, password: string, displayName: string) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(appAuth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log("user", user);

        if (!user) {
          throw new Error("회원가입 실패");
        }
        updateProfile(appAuth.currentUser!, { displayName })
          .then(() => {
            setError(null);
            setIsPending(false);
          })
          .catch((error) => {
            setError(error.message);
            setIsPending(false);
          });
      }
    );
  };
  return { error, isPending, signup };
}
