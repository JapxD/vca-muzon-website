import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string; // e.g. "500px", "80%", etc.
  withXmark?: boolean; // whether to show the X mark for closing the modal
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth,
  withXmark,
}: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 backdrop-blur-xs flex justify-center items-center transition-colors z-999 ${isOpen ? "visible bg-white/10" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // So that it wont close when clicking the modal itself
        className={`w-[90%] ${maxWidth || "max-w-[600px]"} border-1 bg-white rounded-xl p-6 transition-all ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        {title && (
          <h3 className="text-xl font-medium text-[var(--color-text-primary)]">
            {title}
          </h3>
        )}
        {withXmark && (
          <button onClick={onClose} className="">
            <FontAwesomeIcon
              className="absolute top-7 right-4 cursor-pointer hover:scale-110 transition duration-200"
              icon={faXmark}
            />
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
