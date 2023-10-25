import React from "react";
import { Game } from "../hook/useGame";
import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        image={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <CardContent>
        <Stack
          direction="row"
          alignItems='center'
        >
          <Typography gutterBottom variant="h5" component="div" sx={{ mr: '10px' }}>
            {game.name}
          </Typography>
          <Emoji rating={game.rating_top} />
        </Stack>
        <Stack
          direction="row"
          sx={{ gap: { lg: "25px", xs: "20px" } }}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCard;
