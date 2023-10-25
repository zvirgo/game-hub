import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenres, { Genre } from "../hook/useGenre";
import GenresListSkeleton from "./GenresListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading &&
        skeletons.map((skeleton) => <GenresListSkeleton key={skeleton} />)}
      <Typography
        variant="h6"
        sx={{
          px: { lg: "16px", xs: "10px" },
          pt: { lg: "8px", xs: "5px" },
        }}
      >
        Genres
      </Typography>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} disablePadding>
            <ListItemButton onClick={() => onSelectedGenre(genre)}>
              <ListItemAvatar>
                <Avatar
                  alt={genre.name}
                  src={genre.image_background}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight:
                      genre.id === selectedGenre?.id ? "bold" : "regular",
                  }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {genre.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
