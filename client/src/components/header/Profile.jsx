import { Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Profile = ({ account }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event)=>{
        setOpen(event.currentTarget)
    }

    const handleClose = ()=>{
        setOpen(false)
    }
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
        <Menu
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Profile;
