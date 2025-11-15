import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slice";
import SunIcon from "../../../assets/images/sun.png";
import MoonIcon from "../../../assets/images/moon.png";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => dispatch(toggleTheme())}
      />
      <span
        className="slider"
        style={{
          "--icon": `url(${theme === "light" ? SunIcon : MoonIcon})`,
        }}
      >
        <span
          style={{
            content: `url(${theme === "light" ? SunIcon : MoonIcon})`,
            position: "absolute",
            height: "26px",
            width: "26px",
            left: "2px",
            bottom: "2px",
            backgroundImage: `url(${theme === "light" ? SunIcon : MoonIcon})`,
            backgroundSize: "cover",
            borderRadius: "50%",
            transition: "transform 0.4s",
            transform: theme === "dark" ? "translateX(30px)" : "translateX(0)",
          }}
        />
      </span>
    </label>
  );
};

export default ThemeToggle;
