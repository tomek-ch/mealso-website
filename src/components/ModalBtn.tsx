import { useModal } from "../store/modalStore";
import { Button } from "./Button";

export const ModalBtn = ({ className = "" }) => {
  const { toggleModal } = useModal();
  return (
    <Button className={className} onClick={toggleModal}>
      Sign up
    </Button>
  );
};
