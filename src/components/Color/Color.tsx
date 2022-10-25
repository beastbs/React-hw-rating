import StarsRating from "../StarRating/StarRating";
import { XOctagonFill } from "react-bootstrap-icons";
import { useColor } from "../ColorContext/ColorContext";

import "./Color.css";

export type ColorProps = {
  title: string;
  color: string;
  starRating: number;
  id: number;
};

const Color = (props: ColorProps) => {
  const { handleDeleteColor } = useColor();

  const { title, color, id } = props;
  const handleDelete = () => handleDeleteColor(id);

  return (
    <div className="color-wrap">
      <h2 style={{ width: "150px" }}>{title}</h2>
      <div
        style={{
          width: 125,
          backgroundColor: color,
          border: "1px solid black",
        }}
      ></div>
      <h4>
        <StarsRating {...props} />
      </h4>
      <button className="color__close-icon" onClick={handleDelete}>
        <XOctagonFill width="25px" height="15px" />
      </button>
    </div>
  );
};

export default Color;
