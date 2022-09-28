import React from "react";
import { Link } from 'react-router-dom';
import { Box, List, ListItem } from '@mui/material';
import '../components/style.css';


export function Homepage() {

    return (
        <>
            <Box sx={{ maxWidth: 360, position: 'absolute', top: '80px', left: '20px', color: 'white', fontSize: '30px' }}>
                <List>
                    <ListItem sx={{ margin: '20px' }}>
                        <Link to="/profile/" className='link'>Profile</Link>
                    </ListItem>

                    <ListItem sx={{ margin: '20px' }}>
                        <Link to="/chats/" className='link'>Chats</Link>
                    </ListItem>
                </List>
                
            </Box>

        </>
    );
}