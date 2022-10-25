import { useState } from "react";
import AddColor from "../AddColor/AddColor";
import ColorList from "../ColorList/ColorList";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import SaveColorBtn from "../SaveColorBtn/SaveColorBtn";
import "./App.css";

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOpenForm = () => {
    setIsOpenForm((prev) => !prev);
  };

  return (
    <div className="app-wrapper">
      <ColorList />
      {isOpenForm ? (
        <div className="app-wrapper__btns">
          <AddColor closeColorButton={handleOpenForm} />
          <SaveColorBtn />
        </div>
      ) : (
        <OpenModalButton onOpenForm={handleOpenForm} />
      )}
    </div>
  );
}

export default App;
