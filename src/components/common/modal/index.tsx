import { MouseEvent } from "react";
import Button from "../button/Button";
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
        {variant === "signup" && <SignupModal />}
        {variant === "login" && <LoginModal />}
        {variant === "code" && <CodeModal />}
        {variant === "certification" && <CertificationModal />}

        <div className="button-wrapper">
          <Button onClick={onClose} size="sm" variant="outlined">
            취소
          </Button>
          <Button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              console.log("submit")
            }
            size="sm"
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
