import React from 'react'
import {Box, Typography, Grid, Card} from '@mui/material'
import greenwaves from '../images/green-wavy-bg.png'

const LandscapingServices = () =>{

    const servicesTables = [
        {
            "serviceType":"Full-Service Landscaping",
            "services":["Edging", "Sod", "Tree removal", "Tree installation", "Perennials/annuals", "Flower beds", "Shrubs and boxwoods", "Planter pots", "Plant containers", "Trees", "Rock", "Mulch", "Mowing", "Restoration"]
        },
        {
            "serviceType":"Plant Installation and Maintenance",
            "services":[
                "Wide variety of hearty, durable, and colorado-proof plant varieties with an equally wide variety of plant container options.",
                "Interior Maintenance: Plant watering, replacement, trimming.",
                "Exterior Maintenance: Trimming, mowing, weeding, mulch."
                ]
        },
        {
            "serviceType":"Fresh Florals and Floral Design",
            "services":[
                "Energize your lobby and amenity areas by adding colorful, eye popping floral designs.",
                "Blooming bowls and fresh floral arrangements.",
                "We source our flowers from exotic locations across the globe to bring you visually arresting, attention-garnering floral designs that captivate passersby and serve as the centerpiece for conversations.",
                "Weekly delivery available."
                ]
        }
    ]


    return (
        <Box
            sx={{
                backgroundSize:'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage:`url(${greenwaves})`,
                padding:'10px',
                minHeight:'500px' 
            }}
        >
            <Typography>
            Energyscapes collaborates with our clients to create tailored landscape management and plant installation and maintenance solutions that cater to the unique requirements of each property.
            By actively listening to our clients, we ensure that all their objectives are met while staying within their budget and expectations. 
            Our success is driven by our focus on professionalism and meticulous planning, which enables us to unlock the full value potential of each property.
            </Typography>
            <Box
               
            >
                <Grid
                    container
                    spacing={2}
                    sx={{mt:5, mb:5}}
                >
                    {
                        servicesTables.map((item, i) => {
                            return (<Grid 
                            item
                            xs={12}
                            sm={6}
                            key={i+1}
                            >
                                <Card>

                                <Typography variant='h6' textAlign="center">{item.serviceType}</Typography>
                                <ul>
                                {item.services.map((ele, j)=> (<li key={j+i+100}>{ele}</li>))}
                                </ul>
                                </Card>
                            </Grid>)
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default LandscapingServices