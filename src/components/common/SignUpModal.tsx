import { useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";

interface Props {
  closeModal: () => void;
  onSubmit: any;
}

export default function SignUpModal({ closeModal, onSubmit }: Props) {
  const inputRef = useRef(null);

  return (
    <div className="background" onClick={closeModal}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="variant-code">
          <Text type="title">입장코드를 입력해주세요</Text>
          <input placeholder="e.g. 1234567" />
        </div>
        <div className="button-wrapper">
          <Button onClick={closeModal} size="sm" variant="outlined">
            취소
          </Button>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onSubmit(e)}
            size="sm"
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
