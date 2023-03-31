import { useState } from "react";
import useSignup from "../../../hooks/useSignup";
import CertificationModal from "./CertificationModal";
import CodeModal from "./CodeModal";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
type Variant = "login" | "signup" | "code" | "certification";

interface ModalProps {
  variant?: Variant;
  onClose: () => void;
  onSubmit: any;
}

export default function Modal({ variant, onClose, onSubmit }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup } = useSignup();

  const handleData = (event: any) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };
  const handleSignupSubmit = (event: any) => {
    event.preventDefault();
    signup(email, password, displayName);
    onClose();
  };

  return (
    <div className="background" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {variant === "signup" && <SignupModal onClose={onClose} />}
        {variant === "login" && <LoginModal />}
        {variant === "code" && <CodeModal />}
        {variant === "certification" && <CertificationModal />}
      </div>
    </div>
  );
}
