import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SortSelector = () => {
  return (
    <>
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel>Order by:Relevance</InputLabel>
        <Select label="Order by:Relevance">
          <MenuItem value="Relevance">Relevance</MenuItem>
          <MenuItem value="Date Added">Date Added</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Release Date">Release Date</MenuItem>
          <MenuItem value="Popularity">Popularity</MenuItem>
          <MenuItem value="Average Rating">Average Rating</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SortSelector;
