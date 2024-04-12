import React, { useEffect } from "react";
import { Box,Grid,Typography,styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import ActionItems from "./ActionItems";


const Component= styled(Box)({
	background:'#F2F2F2',
	marginTop:'55px'
});

const Container = styled(Grid)({
	background:'#FFFFFF',
	display:'flex'
});

const RightContainer = styled(Grid)({
	marginTop:'50px'
});

const DetailsView = () => {
	const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
	const dispatch = useDispatch();
	const { id } = useParams();
	const { loading, product } = useSelector((state) => state.getProductDetails);
	useEffect(() => {
		if (product && id !== product.id) {
			dispatch(getProductDetails(id));
		}
	}, [dispatch, id, loading, product]);
	return (
		<Component>
			{product && Object.keys(product).length &&
				<Container container>
					<Grid item lg={4} md={4} sm={8} xs={12}>
						<ActionItems product = {product}></ActionItems>
					</Grid>
					<RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
			<Typography style={{marginTop:'5px',color:'#878787',fontSize:'14px'}}>8 Ratings & 1 Review
			<Box component='span'><img src={fassured} alt="flipkartassured" style={{width:'77px', marginLeft:'20px'}}></img></Box>
			</Typography>
			<Typography>
				<Box component='span' style={{fontSize:'28px'}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
				<Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
				<Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
			</Typography>
          </RightContainer>
				</Container>
      }
		</Component>
	);
};

export default DetailsView;
