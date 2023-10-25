import { Search } from "@mui/icons-material";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "flex-end",
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Search Games"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (ref.current) onSearch(ref.current.value);
            }
          }}
        />
      </Container>
    </>
  );
};

export default SearchInput;
