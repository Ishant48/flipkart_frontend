import React, { useEffect } from "react";
import { Box,Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";

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
		<Box>
			{product && Object.keys(product).length &&
				<Box>
					<Box></Box>
					<Box>
            <Typography>{product.title.longTitle}</Typography>
          </Box>
				</Box>
      }
		</Box>
	);
};

export default DetailsView;
