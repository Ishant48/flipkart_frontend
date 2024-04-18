import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/system";
import React, { useState, useContext } from "react";
import LoginDialogue from "../login/LoginDialogue";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

function CustomButtons() {
  const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0 3% 0 auto",
    "& > button, & > p , & > div": {
      marginRight: "40px !important",
      fontSize: "15px",
      alignItems: "centre", // Should be "center"
    },
    [theme.breakpoints.down('md')]: {
      display:'block'
  }
}));

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

  const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display:'block'
    }
  }));
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const openDialog = async () => {
    setOpen(true);
  };


  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile> // Render Typography only when account is not null
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialogue open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButtons;
