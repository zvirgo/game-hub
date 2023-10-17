import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenres from "../hook/useGenre";
import GenresListSkeleton from "./GenresListSkeleton";
const GenresList = () => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading &&
        skeletons.map((skeleton) => <GenresListSkeleton key={skeleton} />)}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={genre.name} src={genre.background_image} />
              </ListItemAvatar>
              <ListItemText>
                <Typography
                  sx={{ display: "inline" }}
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
