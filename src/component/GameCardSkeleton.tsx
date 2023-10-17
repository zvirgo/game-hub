import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia>
        <Skeleton variant="rectangular" width={350} height={230} />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />

      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
