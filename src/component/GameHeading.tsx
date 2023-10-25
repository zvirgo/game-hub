import { Typography } from "@mui/material";
import { Genre } from "../hook/useGenre";
import { Platform } from "../hook/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  const heading = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;
  return (
    <>
      <Typography variant="h3">{heading}</Typography>
    </>
  );
};

export default GameHeading;
