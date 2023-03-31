import { useState } from "react";

const useShowModal = () => {
  const [isShow, setIsShow] = useState(false);
  const openModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };

  return [isShow, openModal, closeModal] as const;
};

export default useShowModal;
