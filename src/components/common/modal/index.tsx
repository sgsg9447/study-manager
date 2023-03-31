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
  return (
    <div className="background" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {variant === "signup" && <SignupModal onClose={onClose} />}
        {variant === "login" && <LoginModal onClose={onClose} />}
        {variant === "code" && <CodeModal onClose={onClose} />}
        {variant === "certification" && <CertificationModal />}
      </div>
    </div>
  );
}
