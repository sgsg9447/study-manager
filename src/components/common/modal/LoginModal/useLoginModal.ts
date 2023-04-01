import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../../hooks/useLogin";
import useSignup from "../../../../hooks/useSignup";

const useLoginModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup } = useSignup();
  const { login } = useLogin();
  const navigate = useNavigate();

  //TODO : any 바꾸기
  const handleData = (event: any) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayName(event.target.value);
    }
  };

  const handleSignupSubmit = (event: any) => {
    event.preventDefault();
    signup(email, password, displayName);
    onClose();
  };

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    login(email, password);
    onClose();
    navigate("/room");
  };

  return {
    handleData,
    handleSignupSubmit,
    handleLoginSubmit,
    email,
    password,
    displayName,
  };
};

export default useLoginModal;
