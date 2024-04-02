import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";
import { useState } from "react";
import LoginDialogue from "../login/LoginDialogue";

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



  const [open,setOpen] = useState(false);

  const openDialog = async()=>{
    setOpen(true);
  }
  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>

      <Box style={{ display: "flex" }}>
        <ShoppingCart></ShoppingCart>
        <Typography>Cart</Typography>
      </Box>
      <LoginDialogue open={open} setOpen={setOpen}></LoginDialogue>
    </Wrapper>
  );
}

export default CustomButtons;
