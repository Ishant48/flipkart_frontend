import React, { Fragment, useEffect } from 'react'
import Navbar from './Navbar'
import Banners from './Banners'
import { Box } from '@mui/material'
import { styled } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import Slide from '../header/Slide';
import MidSlide from '../header/MidSlide';
import MidSection from '../header/MidSection';

function Home() {
    const Component = styled(Box)({
        padding: '10px',
        backgroundColor: '#F2F2F2'
    });
    const {products} = useSelector(state => state.getProducts);
    console.log(products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <Fragment>
            <Navbar></Navbar>
            <Component>
                <Banners></Banners>
                <MidSlide products={products} title="Deal of the Day" timer={true}></MidSlide>
                <MidSection></MidSection>
                <Slide products={products} title="Discount for you" timer={false}></Slide>
                <Slide products={products} title="Suggeated Items" timer={false}></Slide>
                <Slide products={products} title="Top Selection" timer={false}></Slide>
                <Slide products={products} title="Recommended Items" timer={false}></Slide>
                <Slide products={products} title="Trending offers" timer={false}></Slide>
                <Slide products={products} title="Top offers" timer={false}></Slide>
                <Slide products={products} title="Accessories" timer={false}></Slide>
            </Component>
        </Fragment>

    )
}

export default Home
