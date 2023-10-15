import { Chip } from "@mui/material";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Chip
      label={score}
      color={score > 75 ? "success" : score > 60 ? "warning" : "default"}
      size="small"
    />
  );
};

export default CriticScore;
