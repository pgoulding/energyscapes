import React, { useState, useRef, useEffect } from "react";
import {Box, Typography, Link} from '@mui/material';
import Carousel from "./Carousel";

import brownPalaceLogo from "../images/client-logos/brown-palace-white-logo.png"
import doubleTreeLogo from "../images/client-logos/DoubleTreeLogo.png"
import jacquardHotelLogo from "../images/client-logos/Jacquard-Hotel-Logo.jpeg"
import lpcDenverLogo from "../images/client-logos/lpc-denver-white-logo.png"
import marriottLogo from "../images/client-logos/marriott-logo.png"
import gablesLogo from "../images/client-logos/gables-logo.png"
import halcyonLogo from "../images/client-logos/halcyon-white-logo.png"
import ritzCarltonLogo from "../images/client-logos/ritz-carlton-white-logo.png"


const clients = [
    {
        "name": "Gables",
        "image": gablesLogo,
        "alt": "Gables logo",
        "meta": "Luxury apartments",
        "link": "https://gables.com/"
    },
    {
        "name": "Ritz-Carlton",
        "image": ritzCarltonLogo,
        "alt": "Ritz-Carlton logo",
        "meta": "Luxury hotels and resorts",
        "link": "https://www.ritzcarlton.com/"
    },
    {
        "name": "Marriott",
        "image": marriottLogo,
        "alt": "Marriott logo",
        "meta": "Hotel and resort company",
        "link": "https://www.marriott.com/"
    },
    {
        "name": "Brown Palace Denver",
        "image": brownPalaceLogo,
        "alt": "Brown Palace Denver logo",
        "meta": "Historic luxury hotel",
        "link": "https://www.brownpalace.com/"
    },
    {
        "name": "Double Tree",
        "image": doubleTreeLogo,
        "alt": "Double Tree logo",
        "meta": "Hotel chain",
        "link": "https://www.hilton.com/en/hotels/denewdt-doubletree-denver-tech-center/"
    },
    {
        "name": "Jacquard Hotel",
        "image": jacquardHotelLogo,
        "alt": "Jacquard Hotel logo",
        "meta": "Boutique hotel",
        "link": "https://www.thejacquard.com/"
    },
    {
        "name": "Lincoln Properties",
        "image": lpcDenverLogo,
        "alt": "Lincoln Properties logo",
        "meta": "Real estate company",
        "link": "https://www.lpcdenver.com/"
    },
    {
        "name": "Halcyon",
        "image": halcyonLogo,
        "alt": "Halcyon logo",
        "meta": "Boutique hotels",
        "link": "https://www.halcyonhotelcherrycreek.com/"
    }
]

const FeaturedClients = () => {
    return (
        <Box id='featured-clients' sx={{backgroundColor:'#444444', color:'#fefefe', padding:'10px'}}>
            <Typography variant='h3' align='center'>
                FEATURED CLIENTS
            </Typography>
            {/* <Carousel items={clients} /> */}
            <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-evenly', alignContent:"center"}}>

            {clients.map((client, i) => {
                let height = "120px"
                if(client.name === "Halcyon") {
                    height = "60px"
                }
                return (<img key={client.name} style={{margin:10}} width='auto' height={height} src={client.image} alt={client.alt}/>)
            })}
            </Box>
        </Box>
    )
}

export default FeaturedClients