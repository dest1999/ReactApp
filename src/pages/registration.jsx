import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { withFormik } from "formik";
import { Typography, Link, Divider } from "@mui/material";
import { useHistory, Link as RouteLink } from "react-router-dom";
import { SIGN_IN_ROUTE } from "../constants/path";
import { setError } from "../slices/errorSlice";
import { fetchUserRegistration } from "../firebase-auth";
import { AuthForm } from "../components/auth-form/auth-form";

const RegistrationForm = withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit: Function.prototype,
})(AuthForm);

export const Registration = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleRegistration = async (authParams) => {
        try {
            await fetchUserRegistration(authParams);
            history.push(SIGN_IN_ROUTE);

        } catch(error) {
            dispatch(setError(error.message));
        }
    }
    return (
        <Fragment>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', color: 'white' }}>
                Registration
            </Typography>
            <RegistrationForm onSubmit={handleRegistration} />
            <Divider sx={{mt: '16px', mb: '8px' }} />
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
                Go to <Link component={RouteLink} to={SIGN_IN_ROUTE} >login</Link> page
            </Typography>
        </Fragment>
    )
}