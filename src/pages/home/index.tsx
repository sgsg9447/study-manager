import Button from "../../components/common/button/Button";
import Modal from "../../components/common/modal";
import useShowModal from "../../hooks/useShowModal";

export default function Home() {
  const [isShowSignupModal, openSignupModal, closeSignupModal] = useShowModal();
  const [isShowLoginModal, openLoginModal, closeLoginModal] = useShowModal();

  return (
    <div className="container">
      <div className="home-wrapper">
        <Button onClick={openSignupModal} style={{ width: "300px" }}>
          회원가입하기
        </Button>
        <Button onClick={openLoginModal} style={{ width: "300px" }}>
          로그인하기
        </Button>
        {isShowSignupModal && (
          <Modal variant="signup" onClose={closeSignupModal} />
        )}
        {isShowLoginModal && (
          <Modal variant="login" onClose={closeLoginModal} />
        )}
      </div>
    </div>
  );
}
