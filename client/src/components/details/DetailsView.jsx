import React, { useEffect } from "react";
import { Box, Grid, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)(({theme})=>({
	background: '#F2F2F2',
	marginTop: '55px',
	[theme.breakpoints.down('lg')]: {
        margin:'0px'
    }
}));

const Container = styled(Grid)({
	background: '#FFFFFF',
	display: 'flex'
});

const RightContainer = styled(Grid)({
	marginTop: '50px'
});

const DetailsView = () => {
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
						<ActionItems product={product}></ActionItems>
					</Grid>
					<RightContainer item lg={8} md={8} sm={8} xs={12}>
						<ProductDetail product={product}></ProductDetail>
					</RightContainer>
				</Container>
			}
		</Component>
	);
};

export default DetailsView;
