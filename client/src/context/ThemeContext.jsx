import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// export asd custome Hook
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
