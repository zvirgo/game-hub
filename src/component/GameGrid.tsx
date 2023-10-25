import useGames from "../hook/useGame";
import GameCard from "./GameCard";
import { Box, Stack } from "@mui/material";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hook/useGenre";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hook/usePlatforms";
import { useState } from "react";
import SortSelector from "./SortSelector";

interface Props {
  selectedGenre: Genre | null;
  searchText:string
}

const GameGrid = ({ selectedGenre,searchText }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState("");
  const { games, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    sortOrder,
    searchText
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <Stack
        direction="row"
        sx={{ gap: { lg: "25px", xs: "20px" } }}
        flexWrap="wrap"
      >
        <PlatformSelector
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <SortSelector
          onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
          sortOrder={sortOrder}
        />
      </Stack>
      <Box mt="10px">
        <Stack
          direction="row"
          sx={{ gap: { lg: "25px", xs: "20px" } }}
          flexWrap="wrap"
          justifyContent="space-between"
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
