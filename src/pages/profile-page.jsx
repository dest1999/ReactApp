import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from '@mui/material';
import { CheckBox } from "../components/ProfileChecked";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../constants/profileCheck";
import { getUser } from "../store/selectors/users";
import { setListenerDBUser, updateUserName, writeUserData } from "../firebase-db-utils";
import { getProfile } from "../store/selectors/profile";

export const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(getUser);
    
    const profile = useSelector(getProfile);

    useEffect(() => {
        
        if (setListenerDBUser()) {
            const loginedUser = Object.values(setListenerDBUser());
            const userKeys = Object.keys(setListenerDBUser());

            if (!userKeys.includes(user.uid)) {
                writeUserData(user.uid, 'USER', user.email);
            } else if (userKeys.includes(user.uid) && profile.name === 'USER') {
                let userName = loginedUser.filter((item) => item.id === user.uid)[0].username;
                if (userName !== 'USER') {
                    dispatch(addName(userName));
                }
            }
        }
    });
    
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const onAddName = () => {
        dispatch(addName(name));
        updateUserName(user.uid, name);
        setName('');
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [name]);

    return (
        <Box sx={{ minWidth: 360, position: 'absolute', top: '25%', left: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#1976d2'  }}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            {profile.name}
            </Typography>
            <TextField
                sx={{
                    '& > :not(style)': { m: 1, width: '49ch', color: 'white', fontSize: '25px', textAlign: 'left' },  
                }}
                label="Введите свое имя"
                value={name}
                onChange={handleChange}
            />
            <Button onClick={onAddName}
                sx={{
                    color: 'white',
                    fontSize: '25px'
                }}
                >
                    СОХРАНИТЬ
                </Button>
            <CheckBox />
        </Box>
    );
}