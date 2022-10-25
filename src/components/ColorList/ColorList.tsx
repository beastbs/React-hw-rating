import Color from "../Color/Color";
import { useColor } from "../ColorContext/ColorContext";
import "./ColorList.css";

const ColorList = () => {
  const { colors } = useColor();

  const message = (
    <div className="color-message">
      <h2> No colors!</h2>
      <p>Open form and add color.</p>
    </div>
  );

  return (
    <div className="color-list">
      {colors.length
        ? colors.map((color) => <Color key={color.id} {...color} />)
        : message}
    </div>
  );
};

export default ColorList;
