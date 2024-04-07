import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { styled } from "@mui/system";
import { authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)({
  height: "70vh",
  width: "90vh",
});

const Imgb = styled(Box)({
  background:
    "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
  height: "80%",
  width: "28%",
  padding: "45px 35px",
  "& > p, & > h5": {
    color: "#FFFFFF",
    fontWeight: 600,
  },
});

const LoginButton = styled(Button)({
  textTransform: "none",
  background: "#FB641B",
  color: "#FFF",
  height: "48px",
  "boreder-radius": "2px",
});

const RequestOtpButton = styled(Button)({
  textTransform: "none",
  background: "#FFF",
  color: "#2874F0",
  height: "48px",
  "boreder-radius": "2px",
  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
});

const Text = styled(Typography)({
  fontSize: "12px",
  color: "#878787",
});

const CreateAccount = styled(Typography)({
  fontSize: "14px",
  textAlign: "center",
  color: "#2874f0",
  fontWeight: "600",
  cursor: "pointer",
});
const Wrapper = styled(Box)({
  display: "flex",
  "flex-direction": "column",
  padding: "25px 35px",
  "& > div, & > Button, & > p": {
    "margin-top": "20px",
  },
});
function LoginDialogue({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const accountInitialValues = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like's you are new here!",
      subHeading: "Sign up with your mobile to get started",
    },
  };

  const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const {setAccount} = useContext(DataContext);
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if(!response)  return;
    handleClose();
    setAccount(signup.firstname)
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Imgb>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Imgb>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email/Phone Number"
              ></TextField>
              <TextField variant="standard" label="Enter Password"></TextField>
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOtpButton>Request OTP</RequestOtpButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account.
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Firstname"
                name="firstname"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Lastname"
                name="lastname"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Phone"
                name="phone"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialogue;
