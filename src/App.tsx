import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Create a Material-UI theme with dark or light mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <GameGrid />
      </div>
    </ThemeProvider>
  );
}

export default App;
