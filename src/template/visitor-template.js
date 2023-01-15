import { Box } from '@mui/material';
import React from 'react';
import { Footer, Navbar } from '../components';

const VisitorTemplate = ({ children }) => {
    return (
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
            <Navbar />
            {children}
            <Footer />
        </Box>
    )
};

export default VisitorTemplate;