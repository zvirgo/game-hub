import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms, { Platform } from "../hook/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  return (
    <>
      {error && <p>{error}</p>}
      <Box>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Platforms</InputLabel>
          <Select label="Platforms">
            {platforms.map((platform) => (
              <MenuItem
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectedPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default PlatformSelector;
