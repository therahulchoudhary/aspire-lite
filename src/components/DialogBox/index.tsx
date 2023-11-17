import Modal from "react-modal";
interface Props {
  children: React.ReactNode;
  isVisible?: boolean;
  closeHandler: VoidFunction;
}

const DialogBox = (props: Props): JSX.Element => {
  const { children, isVisible } = props;

  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0, 0.25)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isVisible || false} style={customStyles} contentLabel="Example Modal" ariaHideApp={false}>
      {children}
    </Modal>
  );
};

export default DialogBox;
