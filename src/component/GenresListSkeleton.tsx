import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
} from "@mui/material";
import useGenres from "../hook/useGenre";
const GenresList = () => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            </ListItemAvatar>
            <ListItemText>
              <Skeleton variant="text" />
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default GenresList;
