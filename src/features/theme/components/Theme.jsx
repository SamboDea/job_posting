// src/ThemeWrapper.jsx
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return children;
};

export default Theme;
