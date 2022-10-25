import useInput from "../useInput/useInput";
import { useColor } from "../ColorContext/ColorContext";
import "./AddColor.css";

type closeModalButton = {
  closeColorButton: () => void;
};

const AddColor = ({ closeColorButton }: closeModalButton) => {
  const { handleAddColor } = useColor();

  const [titleState, resetTitle] = useInput("");
  const [colorState, resetColor] = useInput("#fff");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAddColor(titleState.value, colorState.value);
    resetTitle();
    resetColor();
    closeColorButton();
  };

  return (
    <form className="form">
      <input
        className="form__input-color"
        type="text"
        placeholder="Color name"
        value={titleState.value}
        onChange={titleState.onChange}
      />
      <input
        className="form__pick-color"
        style={{ width: "100%", cursor: "pointer" }}
        type="color"
        value={colorState.value}
        onChange={colorState.onChange}
      />
      <button className="form__button" onClick={handleSubmit}>
        Add Color
      </button>
    </form>
  );
};

export default AddColor;
