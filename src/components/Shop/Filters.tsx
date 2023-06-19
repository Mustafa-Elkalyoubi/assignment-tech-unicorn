import { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, Slider, Typography, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Filters(props: {
  categories: string[];
  searchHook: React.Dispatch<React.SetStateAction<string>>;
  priceHook: React.Dispatch<React.SetStateAction<number[]>>;
  categoryHook: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: number;
}) {
  const [search, setSearch] = useState("");
  const [priceValue, setPriceValue] = useState([0, props.maxPrice]);

  useEffect(() => {
    props.searchHook(search);
  }, [search]);

  useEffect(() => {
    props.priceHook(priceValue);
  }, [priceValue]);

  const handleCategoryFilter = (category: string) => {
    props.categoryHook(category);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <TextField
        variant="outlined"
        label="Search products"
        sx={{ width: 1, backgroundColor: "white" }}
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width={1}
        marginTop={5}
        marginBottom={2}>
        <Typography variant="h4" fontWeight="bold">
          Price
        </Typography>
        <FilterAltOutlinedIcon />
      </Box>
      <Slider
        getAriaLabel={() => "Price Range"}
        value={priceValue}
        valueLabelDisplay="auto"
        min={0}
        max={props.maxPrice}
        defaultValue={[0, 1000]}
        onChange={(_event: Event, newValue: number | number[]) =>
          setPriceValue(newValue as number[])
        }
        marks={[
          { value: 0, label: "$0" },
          { value: props.maxPrice, label: `$${props.maxPrice}` },
        ]}
        sx={{ width: 0.9 }}
      />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width={1}
        marginTop={2}>
        <Typography variant="body1">Range</Typography>
        <Typography variant="body1">
          ${priceValue[0]} - ${priceValue[1]}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="start" width={1} marginTop={5}>
        <Typography variant="h4" fontWeight="bold">
          Product Categories
        </Typography>
        <Box display="flex" flexDirection="column" marginTop={5} width={1} gap={1}>
          <Button
            sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
            onClick={() => handleCategoryFilter("")}
            fullWidth>
            <Typography variant="body2" fontWeight="bold">
              All Products
            </Typography>
            <KeyboardArrowRightIcon />
          </Button>
          {props.categories.map((category) => (
            <Button
              sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
              onClick={() => handleCategoryFilter(category)}
              fullWidth>
              <Typography variant="body2" fontWeight="bold">
                {category}
              </Typography>
              <KeyboardArrowRightIcon />
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Filters;
