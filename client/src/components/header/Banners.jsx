import React from 'react';
import Carousel from "react-multi-carousel";
import { bannerData } from '../constants/data';
import { styled } from "@mui/system";
import "react-multi-carousel/lib/styles.css";

function Banners() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Image = styled('img')(({theme})=>({
    width: '100%',
    height: '280px',
    [theme.breakpoints.down('md')]: {
      objectFit:'cover',
      height:'100px'
  }
}));
  return (
    <Carousel responsive={responsive} dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false}
      draggable={false} infinite={true} autoPlay={true} slidesToSlide={1}
      autoPlaySpeed={4000}>
      {
        bannerData.map((data) => {
          return (
            <Image src={data.url} alt='banner'></Image>
          )
        })
      }
    </Carousel>
  )
}

export default Banners
