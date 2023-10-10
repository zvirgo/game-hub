import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Box from "@mui/material/Box";
import logo from "../assets/resource/Logo/logo.webp";

const NavBar = () => {
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
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" justifyContent="space-between">
          <img src={logo} width="60" />
          <Box display="flex">
            <IconButton onClick={toggleDarkMode}>
              {theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
