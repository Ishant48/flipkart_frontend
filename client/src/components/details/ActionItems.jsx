import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { useState } from 'react';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    // padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '46%',
    'border-radius': '2px',
    'height': '50px',
    color: '#FFF',
    [theme.breakpoints.down('lg')]: {
        width: '44%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '46%',
    }
}));

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity,setQuantity] = useState(1);
    const {id} = product;
    const addItemToCart = ()=>{
        dispatch(addToCart(id,quantity))
        navigate('/cart');
    };
    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton  style={{marginRight: 10, background: '#ff9f00'}} variant="contained" onClick={()=>addItemToCart()}><Cart />Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;