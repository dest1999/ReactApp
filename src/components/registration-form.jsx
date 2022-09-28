import { Fragment } from "react";
import { useFormik } from "formik"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { fetchUserRegistration } from "../firebase-auth";

export const RegistrationForm = () => {
    const form = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: Function.prototype
    });

    const { values, handleChange } = form;
    const { email, password } = values;

    const handleLogin = () => {
        fetchUserRegistration({ email, password })
    }

    return (
        <Fragment>
            <TextField 
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
            />

            <TextField 
                label="Password"
                name="password"
                value={password}
                onChange={handleChange}
            />

            <Button onClick={handleLogin}>
                Login
            </Button>
        </Fragment>
    )
}