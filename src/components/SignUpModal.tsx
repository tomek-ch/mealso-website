import { useModal } from "../store/modalStore";
import { Modal } from "./Modal";

export const SignUpModal = () => {
  const { $isModalOpen, toggleModal } = useModal();
  return (
    <Modal isOpen={$isModalOpen} onClickOut={toggleModal}>
      Hello world
    </Modal>
  );
};
