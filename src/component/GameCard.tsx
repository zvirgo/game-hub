import React from "react";
import { Game } from "../hook/useGame";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        sx={{ height: 194, width: 350 }}
        image={game.background_image}
        alt={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
