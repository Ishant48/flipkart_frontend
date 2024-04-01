import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)({
  background: '#2874f0',
  height: '55px',
});


const BoxHeader = styled(Box)({
  'margin-left':'12%'
});

const TypeHeader = styled(Typography)({
  'font-size':'10px',
  'font-style':'Italic'
});

const PlusImage = styled('img')({
  width:'10px',
  height:'10px',
  'margin-left':'4px'
});

const CustomButtonWrapper= styled(Box)({
  'margin-top':'0',
  'margin-left':'5%',
  'margin-bottom':'0',
  'margin-right':'auto'
});

function Header() {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar>
        <BoxHeader>
          <img src={logoURL} alt= 'logo' style={{width:'75px'}}></img>
          <Box style={{display:'flex'}}>
            <TypeHeader>
              Explore&nbsp;
              <Box component='span' style={{color:'yellow'}}>Plus</Box>
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
