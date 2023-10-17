import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import usePlatforms from "../hook/usePlatforms";

const PlatformSelector = () => {
  const { platforms, error} = usePlatforms();
  return (
    <>
      {error && <p>{error}</p>}
      <Box>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Platforms</InputLabel>
          <Select label="Platforms">
            {platforms.map((platform) => (
              <MenuItem key={platform.id} value={platform.name}>
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
