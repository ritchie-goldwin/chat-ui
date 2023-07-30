import React from "react";

interface Props {
  open?: boolean;
  locked?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal(props: Props) {
  const { open = false, locked = false, onClose, children } = props;
  const modalRef = React.useRef<HTMLDialogElement>(null);

  const dialogClasses = React.useMemo(() => {
    const _arr = ["modal backdrop:modal-backdrop"];
    if (!open) _arr.push("modal-closing");

    return _arr.join(" ");
  }, [open]);

  const onCancel = (e: any) => {
    e.preventDefault();
    if (!locked) onClose();
  };

  const onClick = ({ target }: { target: any }) => {
    const { current: el } = modalRef;
    if (target === el && !locked) onClose();
  };

  const onAnimEnd = () => {
    const { current: el } = modalRef;
    if (!open) el?.close();
  };

  React.useEffect(() => {
    const { current: el } = modalRef;
    if (open) el?.showModal();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className={dialogClasses}
      onClose={onClose}
      onCancel={onCancel}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div className="modal-container">{children}</div>
    </dialog>
  );
}
