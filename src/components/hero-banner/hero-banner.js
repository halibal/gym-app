import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { HeroBannerImage } from '../../assets/images';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" }
            }}
            position="relative"
            p="20px"
        >
            <Typography color="#FF2625" fontWeight={600} fontSize={26}>
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: "40px" }
                }}
                mb={2}
                mt={2.5}
            >
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography
                fontSize={22}
                lineHeight="35px"
                mb={4}
            >
                Check out the most effective exercises
            </Typography>
            <Button
                variant="contained"
                color='error'
                href="#exercises"
                size='large'
                sx={{
                    backgroundColor: "#ff2625",
                    padding: "15px"
                }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: "0.1",
                    display: { lg: "block", xs: "none" }
                }}
                fontSize={200}
            >
                Exercise
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className='hero-banner-img'
            />
        </Box>
    )
}

export default HeroBanner