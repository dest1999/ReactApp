import { TextField, Box, Button } from "@mui/material";

const textFieldStyles = {
    '& > :not(style)':
    { width: '100%', color: 'white', mb: '24px', textAlign: 'left' }
}

export const AuthForm = ({ values = {}, handleChange, setValues, onSubmit }) => {
    
    const { email, password } = values;

    return (
        <Box sx={{ width: '400px', margin: 'auto', color: 'white' }}>
            <TextField label="Email" name="email" value={email} onChange={handleChange} sx={textFieldStyles} />
            <TextField label="Password" name="password" value={password} onChange={handleChange} sx={textFieldStyles} />
            <Button variant="contained" onClick={() => {
                onSubmit({ email, password });
                setValues({ email: '', password: '' });
            }}
            sx={{ display: 'block', margin: 'auto' }}
            >
                auth
            </Button>
        </Box>
    )
}