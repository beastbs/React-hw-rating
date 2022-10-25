import { useState } from "react";
import { useColor } from "../ColorContext/ColorContext";
import "./StarRating.css";
import { ColorProps } from "../Color/Color";

const StarsRating = (colorItems: ColorProps) => {
  const { id, starRating } = colorItems;

  const { handleRatingColors } = useColor();
  const [hover, setHover] = useState(0);

  const handleRating = (rating: number) => {
    handleRatingColors(id, rating);
  };

  const stars = [...Array(5)];
  return (
    <div className="star-rating">
      {stars.map((star, i) => {
        const num = i + 1;
        return (
          <button
            type="button"
            key={i}
            className={num <= (hover || starRating) ? "on" : "off"}
            onClick={() => handleRating(num)}
            onMouseEnter={() => setHover(num)}
            onMouseLeave={() => setHover(starRating)}
          >
            <span className="star">&#9734;</span>
          </button>
        );
      })}
    </div>
  );
};
export default StarsRating;
