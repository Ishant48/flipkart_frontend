import React, { Fragment, useEffect } from 'react'
import Navbar from './Navbar'
import Banners from './Banners'
import { Box } from '@mui/material'
import { styled } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';

function Home() {
    const Component = styled(Box)({
        padding: '10px',
        backgroundColor: '#F2F2F2'
    });
    const s = useSelector(state => state.getProducts);
    console.log("ishu",s)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
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
