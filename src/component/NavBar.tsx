import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box, IconButton, createTheme } from "@mui/material";
import logo from "../assets/resource/Logo/logo.webp";
import SearchInput from "./SearchInput";

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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <img src={logo} width="60" />
        <SearchInput />
        <IconButton type="button" onClick={toggleDarkMode} sx={{ p: "10px" }}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </>
  );
};

export default NavBar;
