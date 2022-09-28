import React from "react";
import { Box, Typography } from '@mui/material';

export const PageNotFound = () => {
    return (
        <Box sx={{ minWidth: 360, position: 'absolute', top: '25%', left: '20%' }}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            404 This page could not be found.
            </Typography>
        </Box>
    );
}