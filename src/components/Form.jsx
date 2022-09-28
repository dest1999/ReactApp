import React from "react";
import { TextField, Button } from '@mui/material/';

export const Form = ({ inputRef, message, handleChange, onAddMessage }) => {

    return(
        <div className="form">
            <TextField
                inputRef={inputRef}
                sx={{
                    '& > :not(style)': { m: 1, width: '49ch', color: 'white', fontSize: '25px', textAlign: 'left' },  
                }}
                label="Введите сообщение"
                value={message}
                onChange={handleChange}
            />
            <Button onClick={onAddMessage}
                sx={{
                    color: 'white',
                    fontSize: '25px'
                }}
                >
                    ОТПРАВИТЬ
                </Button>

        </div>
    )
}