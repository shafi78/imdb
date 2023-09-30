import { Box, Typography,styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';


const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const StyledBanner = styled('img')({
  width: '100%',
  marginTop: 20
})

const Title = styled(Typography)`
color: #FFFFFF;
margin-top: 10px;
text-align: center;
`

const Slides = ({movies}) => {
  return (
    <Box style={{marginTop:20}}>
      <Carousel
         swipeable={false}
         draggable={false}
         responsive={responsive}
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={3000}
         keyBoardControl={true}
         showDots={false}
         slidesToSlide={1}
         containerClass="carousel-container"
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
      >
        {
          movies.map(movie => (
            <>
            <StyledBanner src={`https://images.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='Banner' />
            <Title>{movie.original_title}</Title>
            </>
          ))
        }
      </Carousel>
    </Box>
  )
}

export default Slides