import React from 'react';
import {AppBar, Button, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../components/style.css';
import { ColorModeSwitch } from './color-mode-switch';
import { useSelector } from 'react-redux';
import { getProfile } from '../store/selectors/profile';

export const NavbarPanel = () => {

  const profile = useSelector(getProfile);

  return (
    <Box sx={{ flexGrow: 1, minWidth: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#1976d2' }}>
          <Toolbar>
            <Button>
              <Link to="/" className='link'>Home</Link>
            </Button>
            <Button>
              <Link to="/profile" className='link'>Profile</Link>
            </Button>
            <Button>
              <Link to="/chats" className='link'>Chats</Link>
            </Button>
            <Button>
              <Link to="/gists" className='link'>Gists</Link>
            </Button>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              {profile.name}
            </Typography>
            <ColorModeSwitch />
          </Toolbar>
          
      </AppBar>
    </Box>
  );
}