import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

function Search() {
  const SearchContainer = styled(Box)({
    background: "#ffff",
    width: "38%",
    "border-radius": "2px",
    "margin-left": "10px",
    display:'flex'
  });

  const InputSearchBase = styled(InputBase)({
    "padding-left": "20px",
    width: "100%",
  });
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brand and more"></InputSearchBase>
      <Box style={{color:'Blue' ,padding:'5px'}}>
        <SearchIcon></SearchIcon>
      </Box>
    </SearchContainer>
  );
}

export default Search;
