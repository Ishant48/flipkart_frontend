import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/system";
import React, { useState, useContext } from "react";
import LoginDialogue from "../login/LoginDialogue";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

function CustomButtons() {
  const Wrapper = styled(Box)({
    display: "flex",
    margin: "0 3% 0 auto",
    "& > button, & > p , & > div": {
      marginRight: "40px", // Use camelCase for CSS properties
      fontSize: "15px",
      alignItems: "centre", // Should be "center"
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

  const [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);

  const openDialog = async () => {
    setOpen(true);
  };

  console.log("account:", account);

  return (
    <Wrapper>
      {account ? (
        <Profile account={account}></Profile> // Render Typography only when account is not null
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <Box style={{ display: "flex" }}>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Box>
      <LoginDialogue open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButtons;
