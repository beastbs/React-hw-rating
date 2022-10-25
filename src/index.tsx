import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ColorPropvider } from "./components/ColorContext/ColorContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ColorPropvider>
    <App />
  </ColorPropvider>
);
