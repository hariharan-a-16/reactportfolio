import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1 className="heading">Theme: {theme}</h1>
      <p className="text">
        This is your themed application. Switch the theme using the buttons above.
      </p>
    </div>
  );
}
