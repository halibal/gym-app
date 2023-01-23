import React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { Logo } from '../../assets/images';

const Footer = () => {
    return (
        <Box bgcolor="#fff3f4">
            <Stack alignItems="center" sx={{
                flexDirection: { lg: 'row' },
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                p: "40px"
            }}>
                <img src={Logo} alt="logo" width="200px" />
                <Typography variant='h6' color="#BAB8B8">
                    Copyright &copy; 2023 | All rights reserved | &nbsp;
                    <Link
                        href='https://www.linkedin.com/in/halilalgul/'
                        sx={{
                            textDecoration: "none",
                            color: "#BAB8B8"
                        }}
                    >
                        contact
                    </Link>
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer