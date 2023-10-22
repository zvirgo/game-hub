import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritics", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <>
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel>Order by:{sortOrder}</InputLabel>
        <Select label="Order by:Relevance">
          {sortOrders.map((sortOrder) => (
            <MenuItem
              key={sortOrder.value}
              value={sortOrder.value}
              onClick={() => onSelectSortOrder(sortOrder.value)}
            >
              {sortOrder.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SortSelector;
