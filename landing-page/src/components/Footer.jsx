import React from 'react'
import {Box, Typography, Link} from '@mui/material';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#444444', color:'#fefefe', padding:'10px'}}>
        <Typography align='center'>Serving the Denver Metro Area since 2017</Typography>
        <Box sx={{mt:5, mb:2}}>
            <Typography>Contact info:</Typography>
                <Typography>3600 E 40th Ave</Typography>
                <Typography>Denver, CO 80205</Typography>
                <Typography><a href="mailto:info@energyscapes.com" color='#fefefe'>info@energyscapes.com</a></Typography>
                <Typography><a href="tel:720-556-0759">720-556-0759</a></Typography>
        </Box>
        </footer>
    )
}

export default Footer;