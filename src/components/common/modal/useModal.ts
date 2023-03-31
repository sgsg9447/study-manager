import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import useSignup from "../../../hooks/useSignup";

const useModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [EntranceCode, setEntranceCode] = useState("");
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
      if (event.target.id === "newNickName") {
        setDisplayName(event.target.value);
      } else if (event.target.id === "entranceCode") {
        setEntranceCode(event.target.value);
      }
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

  const handleCodeSubmit = (event: any) => {
    event.preventDefault();
    //EntranceCode 인증 확인하는 로직
    onClose();
    navigate("/room");
  };

  return {
    handleData,
    handleSignupSubmit,
    handleLoginSubmit,
    handleCodeSubmit,
    email,
    password,
    displayName,
  };
};

export default useModal;
