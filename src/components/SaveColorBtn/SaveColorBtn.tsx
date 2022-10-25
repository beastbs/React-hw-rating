import { useColor } from "../ColorContext/ColorContext";
import "./SaveColorBtn.css";

const SaveColorBtn = () => {
  const context = useColor();
  const { colors } = context;

  const handleSaveColor = () => {
    localStorage.setItem("dataColors", JSON.stringify(colors));
  };

  return (
    <div className="save__wrap">
      <button onClick={handleSaveColor} className="save-btn">
        Save Colors
      </button>
    </div>
  );
};
export default SaveColorBtn;
