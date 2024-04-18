import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton,List, Drawer } from '@mui/material';
import { styled } from '@mui/system';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';

const StyledHeader = styled(AppBar)({
  background: '#2874f0',
  height: '55px',
});


const BoxHeader = styled(Link)({
  'margin-left': '12%',
  'lineHeight': 0,
  textDecoration: 'none',
  color: 'inherit'
});

const TypeHeader = styled(Typography)({
  'font-size': '10px',
  'font-style': 'Italic'
});

const PlusImage = styled('img')({
  width: '10px',
  height: '10px',
  'margin-left': '4px'
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  'margin-top': '0',
  'margin-left': '5%',
  'margin-bottom': '0',
  'margin-right': 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));
function Header() {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
        <List>
            <listItem button>
                <CustomButtons />
            </listItem>
        </List>
    </Box>
);
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color='inherit' onClick={handleOpen}>
          <Menu></Menu>
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <BoxHeader to={'/'}>
          <img src={logoURL} alt='logo' style={{ width: '75px' }}></img>
          <Box style={{ display: 'flex' }}>
            <TypeHeader>
              Explore&nbsp;
              <Box component='span' style={{ color: 'yellow' }}>Plus</Box>
            </TypeHeader>
            <PlusImage src={subURL} alt='sublogo'></PlusImage>
          </Box>
        </BoxHeader>
        <Search></Search>
        <CustomButtonWrapper>
          <CustomButtons></CustomButtons>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
