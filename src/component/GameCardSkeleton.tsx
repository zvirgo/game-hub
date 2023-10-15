import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia>
        <Skeleton height="230px" />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
