import React from 'react';
import Header from './header/Header';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
    
    return (
        <Box sx={{
            minHeight: '100vh',
            background: '#052a4f',
            paddingBottom: 1
        }} >
            <Header />
            {children}
        </Box>
    );
}

export default Layout;