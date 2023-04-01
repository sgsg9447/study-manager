import { useState } from "react";
import Button from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";

export default function Code() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const clickModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit!!");
    //TODO : 콜백함수로 Modal에서 받은 input 값 가져오기
  };
  return (
    <div className="container">
      <div className="code">
        <Button onClick={clickModal} style={{ width: "300px" }}>
          입장코드
        </Button>
        {isOpenModal && (
          <Modal variant="code" onSubmit={onSubmit} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}
