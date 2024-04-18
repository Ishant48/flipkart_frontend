import { Grid, styled } from "@mui/material";
import { imageURL } from "../constants/data";

const Image = styled("img")(({theme})=>({
	marginTop: "10px",
	width: "100%",
	justifyContent: "space-between",
	display: "flex",

    [theme.breakpoints.down('md')]: {
        objectFit:'cover'
    }
}));

const MidSection = () => {
	const url =
		"https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
	return (
		<>
			<Grid
				style={{ marginTop: "10px", justifyContent: "space-between" }}
				lg={12}
				sm={12}
				md={12}
				xs={12}
				container>
				{imageURL.map((image) => {
					return (
						<Grid item lg={4} sm={12} md={12} xs={12}>
							<img
								src={image}
								alt="productsadd"
								style={{ width: "100%" }}></img>
						</Grid>
					);
				})}
			</Grid>
			<Image src={url} alt="Covid"></Image>
		</>
	);
};

export default MidSection;
