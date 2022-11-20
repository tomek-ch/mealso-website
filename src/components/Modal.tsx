import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClickOut: () => void;
};

export const Modal = ({ isOpen, children, onClickOut }: ModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        onClick={onClickOut}
        className={`fixed inset-0 bg-black/70 w-full z-10`}
      />
      <div
        className="
          fixed p-2 w-full max-w-md z-10
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          "
      >
        <div
          className={`
            p-4 bg-white w-full
            rounded-xl shadow-md
          `}
        >
          {children}
        </div>
      </div>
    </>
  );
};
