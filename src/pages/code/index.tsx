import Button from "../../components/common/button/Button";
import Modal from "../../components/common/modal";
import useShowModal from "../../hooks/useShowModal";

export default function Code() {
  const [isShowModal, openModal, closeModal] = useShowModal();

  return (
    <div className="container">
      <div className="code">
        <Button onClick={openModal} style={{ width: "300px" }}>
          입장코드
        </Button>
        {isShowModal && <Modal variant="code" onClose={closeModal} />}
      </div>
    </div>
  );
}
