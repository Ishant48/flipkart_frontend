import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react';


const SmallText = styled(Box)({
    fontSize: '14px',
    verticalAlign: 'baseline',
    '& > p': {
        marginTop: '10px',
        fontSize: '14px'
    }
});

const StyledBadge = styled(LocalOfferIcon)({
    marginRight: '10px',
    color: '#00CC00',
    fontSize: '15px'
});

const ColoumnText = styled(TableRow)({
    fontSize:'14px',
    verticalAlign: 'baseline',
    '& > td':{
        fontSize:'14px',
        marginTop:'10px',
        border:'none'
    }
});

const ProductDetail = ({ product }) => {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
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
                <Typography><StyledBadge />Get extra 50% off upto ₹50 on 1 Item(s)</Typography>
                <Typography><StyledBadge />Get extra 30% off upto ₹50 on 1 Item(s)</Typography>
                <Typography><StyledBadge />Sign up with flipkart and get more offers</Typography>
                <Typography><StyledBadge />Sign up with flipkart and get more offers and get 5% extra cashback</Typography>
                <Typography><StyledBadge />No cost EMi hm nhi depayenge if denege to double lenge</Typography>
                <Typography><StyledBadge />No cost EMi hm nhi depayenge if denege to double lenge ₹50000 </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColoumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: '600' }}>Delivery by {date.toDateString()} | $40</TableCell>
                    </ColoumnText>
                    <ColoumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColoumnText>
                    <ColoumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874F0' }}>IshantCompany</Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View More Sellers</Typography>
                        </TableCell>
                    </ColoumnText>
                    <ColoumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt='advertisementImage' style={{width:'390px'}}></img>
                        </TableCell>
                    </ColoumnText>
                    <ColoumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColoumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
