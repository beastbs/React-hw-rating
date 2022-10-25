import "./OpenModalButton.css";

type OpenModalButtonProps = {
  onOpenForm: () => void;
};
const OpenModalButton = ({ onOpenForm }: OpenModalButtonProps) => {
  return (
    <button className="open-modal" onClick={onOpenForm}>
      Show Form Color
    </button>
  );
};

export default OpenModalButton;
