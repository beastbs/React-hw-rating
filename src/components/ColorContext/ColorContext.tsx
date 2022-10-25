import React, { createContext, useContext, useState, useEffect } from "react";

export type Color = {
  id: number;
  title: string;
  color: string;
  starRating: number;
};

type ColorContex = {
  colors: Array<Color>;
  handleDeleteColor: (id: number) => void;
  handleAddColor: (title: string, color: string) => void;
  handleRatingColors: (id: number, newRating: number) => void;
  handleLoadColor: (data: string) => void;
};

const ColorContext = createContext<null | ColorContex>(null);
export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw Error("Context is null");
  }
  return context;
};

export function ColorPropvider({ children }: React.PropsWithChildren) {
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("dataColors") || [];
    if (typeof data === "string") {
      setColors(JSON.parse(data));
    }
  }, []);

  const handleAddColor = (title: string, color: string) => {
    setColors((prevValue: Color[]) =>
      prevValue.concat({
        id: Math.random(),
        title,
        color,
        starRating: 0,
      })
    );
  };

  const handleDeleteColor = (id: number) => {
    setColors((prevColor: Color[]) =>
      prevColor.filter((color) => color.id !== id)
    );
  };

  const handleRatingColors = (id: number, newRating: number) => {
    setColors((prev: Color[]) =>
      prev.map((color) =>
        color.id === id ? { ...color, starRating: newRating } : color
      )
    );
  };

  const handleLoadColor = (data: string) => {
    setColors(JSON.parse(data));
  };

  const dataForRemoveColor = {
    colors,
    handleAddColor,
    handleDeleteColor,
    handleRatingColors,
    handleLoadColor,
  };

  return (
    <ColorContext.Provider value={dataForRemoveColor}>
      {children}
    </ColorContext.Provider>
  );
}
