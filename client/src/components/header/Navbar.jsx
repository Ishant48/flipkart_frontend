import { Box, Typography } from '@mui/material'
import React from 'react';
import { styled } from "@mui/system";
import { navData } from '../constants/data';


function Navbar() {
    const Component = styled(Box)(({theme})=>({
        display: 'flex',
        margin: '55px 130px 0px 130px',
        justifyContent: 'space-between',
        overflow:'hidden',
        [theme.breakpoints.down('lg')]: {
            margin:'0px'
        }
    }));
    const Container = styled(Box)({
        padding: '12px 8px',
        textAlign:'center'
    });
    const Text = styled(Typography)({
        fontSize:'14px',
        fontWeight:600,
        fontFamily:'inherit'
    });
    return (
        <Box style={{backgroundColor:'#fff'}}>
        <Component>
            {
                navData.map((data) => {
                    return (
                        <Container>
                            <img src={data.url} alt='nav' style={{ width: '64px' }}></img>
                            <Text>{data.text}</Text>
                        </Container>
                    )
                })
            }
        </Component>
        </Box>
    )
}

export default Navbar
