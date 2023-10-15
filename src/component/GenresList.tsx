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
const GenresList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <div>
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
    </div>
  );
};

export default GenresList;
