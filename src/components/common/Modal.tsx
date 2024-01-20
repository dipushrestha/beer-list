type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded bg-white p-6 shadow transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
