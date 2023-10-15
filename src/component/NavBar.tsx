import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box, IconButton, createTheme } from "@mui/material";
import logo from "../assets/resource/Logo/logo.webp";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar = ({ darkMode, toggleDarkMode }: Props) => {
  // Create a Material-UI theme with dark or light mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
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
    </>
  );
};

export default NavBar;
