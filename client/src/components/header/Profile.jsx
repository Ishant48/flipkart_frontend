import { Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";
import { styled } from '@mui/system';


const Component = styled(Menu)({
  marginTop: "5px"
});

const Logout = styled(Typography)({
  marginLeft: '20px',
  fontSize: '14px'
});



const Profile = ({ account, setAccount }) => {

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const logout = () => {
    setAccount('')
  }

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
        <Component
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { handleClose (); logout(); }}>
            <PowerSettingsNewIcon color="primary" fontSize="small"></PowerSettingsNewIcon>
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
