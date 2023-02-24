import React from 'react'
import {Box} from '@mui/material'
import LandscapingServices from './LandscapingServices'
import FeaturedClients from './FeaturedClients'
import ImageGallery from './ImageGallery'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
        root: {
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
        },
        slider: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          '& .slick-slide': {
            height: '100%',
          },
          '& .slick-active': {
            transform: 'scale(1.1)',
            zIndex: 1,
            '& img': {
              filter: 'brightness(0.7)',
            },
          },
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.3s ease',
          },
        },
        arrow: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          cursor: 'pointer',
          color: grey[300],
          '&:hover': {
            color: grey[500],
          },
          '&.left': {
            left: 0,
          },
          '&.right': {
            right: 0,
          },
        },
  });

const Content = () =>{

    return (
        <ThemeProvider theme={theme}>
            <Box id="content">
                <LandscapingServices/>
                <FeaturedClients/>
                {/* <ImageGallery/> */}
            </Box>  
        </ThemeProvider>
    )
}

export default Content