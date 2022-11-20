import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

const isModalOpen = atom(false);

export const useModal = () => {
  const $isModalOpen = useStore(isModalOpen);
  const toggleModal = () => isModalOpen.set(!$isModalOpen);
  return {
    $isModalOpen,
    toggleModal,
  };
};
