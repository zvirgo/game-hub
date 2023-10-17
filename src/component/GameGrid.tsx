import useGames from "../hook/useGame";
import GameCard from "./GameCard";
import { Box, Stack } from "@mui/material";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hook/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

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
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default GameGrid;
