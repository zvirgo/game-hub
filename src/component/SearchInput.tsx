import { Search } from "@mui/icons-material";
import {
  Container,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

const SearchInput = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "flex-end",
          maxWidth: "100%",
        }}
      >
        <FormControl>
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
          />
        </FormControl>
      </Container>
    </>
  );
};

export default SearchInput;
