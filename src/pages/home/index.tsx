import { useState } from "react";
import Button from "../../components/common/button/Button";
import LoginModal from "../../components/common/modal/LoginModal";

export default function Home() {
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const closeModal = () => {
    setIsOpenSignUpModal(false);
    setIsOpenLoginModal(false);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="home-wrapper">
        <Button
          onClick={() => setIsOpenSignUpModal(true)}
          style={{ width: "300px" }}
        >
          회원가입하기
        </Button>
        <Button
          onClick={() => setIsOpenLoginModal(true)}
          style={{ width: "300px" }}
        >
          로그인하기
        </Button>
        {isOpenSignUpModal && (
          <LoginModal
            variant="signup"
            closeModal={closeModal}
            onSubmit={onSubmit}
          />
        )}
        {isOpenLoginModal && (
          <LoginModal
            variant="login"
            closeModal={closeModal}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
}
