import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import LandscapingServices from './LandscapingServices'
import FeaturedClients from './FeaturedClients'
import ImageGallery from './ImageGallery'
const Content = () =>{

    return (
        <Box style={{padding:"10px"}}>
            <LandscapingServices/>
            <FeaturedClients/>
            <ImageGallery/>
        </Box>
    )
}

export default Content