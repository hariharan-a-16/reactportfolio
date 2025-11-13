import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButtons() {
  const { toggleLight, toggleDark } = useContext(ThemeContext);

  return (
    <div className="btn-group">
      <button className="light-btn" onClick={toggleLight}>Light</button>
      <button className="dark-btn" onClick={toggleDark}>Dark</button>
    </div>
  );
}
