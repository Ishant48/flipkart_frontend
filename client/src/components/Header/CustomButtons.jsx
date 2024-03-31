import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";

function CustomButtons() {
  const Wrapper = styled(Box)({
    display: "flex",
    margin: "0 3% 0 auto",
    "& > button, & > p , & > div": {
      "margin-right": "40px",
      "font-size": "15px",
      'align-items':'centre'
    },
  });

  const LoginButton = styled(Button)({
    color: "#2874f0",
    background: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    height: 32,
    boxShadow: "none",
  });
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>

      <Box style={{ display: "flex" }}>
        <ShoppingCart></ShoppingCart>
        <Typography>Cart</Typography>
      </Box>
    </Wrapper>
  );
}

export default CustomButtons;
