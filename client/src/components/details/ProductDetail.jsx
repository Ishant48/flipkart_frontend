import { Box, Typography,styled } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react';


const SmallText = styled(Box)({
    fontSize:'14px',
    verticalAlign:'baseline',
    '& > p':{
        marginTop:'10px',
        fontSize:'14px'
    }
});

const StyledBadge = styled(LocalOfferIcon)({
    marginRight:'10px',
    color:'#00CC00',
    fontSize:'15px'
});

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: '5px', color: '#878787', fontSize: '14px' }}>8 Ratings & 1 Review
                <Box component='span'><img src={fassured} alt="flipkartassured" style={{ width: '77px', marginLeft: '20px' }}></img></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: '28px' }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Get extra 50% off upto ₹50 on 1 Item(s)</Typography>
                <Typography><StyledBadge/>Get extra 30% off upto ₹50 on 1 Item(s)</Typography>
                <Typography><StyledBadge/>Sign up with flipkart and get more offers</Typography>
                <Typography><StyledBadge/>Sign up with flipkart and get more offers and get 5% extra cashback</Typography>
                <Typography><StyledBadge/>No cost EMi hm nhi depayenge if denege to double lenge</Typography>
                <Typography><StyledBadge/>No cost EMi hm nhi depayenge if denege to double lenge ₹50000 </Typography>
            </SmallText>
        </>
    )
}

export default ProductDetail
