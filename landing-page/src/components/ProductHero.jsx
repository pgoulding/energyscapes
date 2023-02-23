import * as React from 'react';
import {Button, Typography} from '@mui/material'
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../images/flowers-bush.png'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Commercial Landscaping Services
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
        Landscaping and Plant Maintenance made easy with us.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href=""
        sx={{ minWidth: 200 }}
      >
        Get Started
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}