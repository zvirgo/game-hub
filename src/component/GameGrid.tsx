import useGames from "../hook/useGame";
import GameCard from "./GameCard";
import { Box, Stack } from "@mui/material";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <Box mt="10px" p="10px">
        <Stack
          direction="row"
          sx={{ gap: { lg: "25px", xs: "20px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default GameGrid;
