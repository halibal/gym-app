import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Logo } from '../../assets/images';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            sx={{
                gap: { lg: "110px", sm: "90px", xs: "40px" },
                mt: { sm: "32px", xs: "20px" },
            }}
            px="20px"
            alignItems="center"
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{ margin: "0 20px" }} />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>
                    Home
                </Link>
                <a
                    href="/#exercises"
                    style={{
                        textDecoration: "none",
                        color: "#3A1212"
                    }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    )
};

export default Navbar;