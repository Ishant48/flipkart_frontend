import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Banners from './Banners'
import { Box } from '@mui/material'
import { styled } from "@mui/system";

function Home() {
    const Component = styled(Box)({
        padding:'10px',
        backgroundColor:'#F2F2F2'
    });
    return (
        <Fragment>
            <Navbar></Navbar>
            <Component>
                <Banners></Banners>
            </Component>
        </Fragment>

    )
}

export default Home
