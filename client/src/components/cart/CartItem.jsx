import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../../utils/CommonUtils';
import ButtonGroup from './ButtonGroup';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Container = styled(Box)({
    borderTop: '1px solid #F0F0F0',
    display: 'flex',
    background:'#fff'
});

const LeftComponent = styled(Box)({
    marginTop: '20px',
    display:'flex',
    flexDirection:'column'
});

const RemoveButton = styled(Button)({
    marginTop: '20px',
    fontSize:'16px',
    color:'#000',
    fontWeight:'600'
});

const SellerText = styled(Typography)({
    color: '#878787',
    fontSize: '14px',
    marginTop: '10px'
});
const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch()
    const removeItemFromCart = (id)=>{
        dispatch(removeFromCart(id))
    }
    return (
        <Container>
            <LeftComponent>
                <img src={item.url} alt='product' style={{height:'110px',width:'110px'}}></img>
                <ButtonGroup></ButtonGroup>
            </LeftComponent>
            <Box style={{margin:'20px'}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SellerText>Seller:IshantCompany
                    <Box component='span'><img src={fassured} alt='flipkartassured' style={{ width: '50px', marginLeft: '10px' }}></img></Box>
                </SellerText>
                <Typography style={{ margin: '20px 0px' }}>
                    <Box component='span' style={{ fontWeight:'600',fontSize:'18px' }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#388E3C' }}>{item.price.discount}</Box>
                </Typography>
                <RemoveButton onClick={()=>removeItemFromCart(item.id)}>Remove</RemoveButton>
            </Box>
        </Container>
    )
}

export default CartItem
