import React from "react";
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../components/style.css';

export function ChatList({ chats, handleChange, delChat }) {

  return (
    <Box sx={{ maxWidth: 360, position: 'absolute', top: '70px', left: '20px', fontSize: '30px',  }}>
      <nav aria-label="main mailbox folders">
          <List>
            {chats.map((chat) =>
              <ListItem key={`${chat.id}`} sx={{ color: 'white', margin: '20px' }} disablePadding>
                  <Link to={`/${chat.name}`} className='link'>{chat.name+ '  '}</Link>
                  <DeleteIcon sx={{marginLeft: '20px'}} id={`${chat.id}`} onClick={delChat}/>
              </ListItem>
              )}
          </List>
          <Button sx={{marginLeft: '25px'}} onClick={handleChange}>Add Chat</Button>
      </nav>
    </Box>)
}




