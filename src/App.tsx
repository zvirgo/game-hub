import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import GenresList from "./component/GenresList";
import { Genre } from "./hook/useGenre";

const drawerWidth = 240;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <Box sx={{ display: "flex" }}>
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            color="default"
          >
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </AppBar>

          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <GenresList
                onSelectedGenre={(genre) => setSelectedGenre(genre)}
                selectedGenre={selectedGenre}
              />
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <GameGrid selectedGenre={selectedGenre} />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
