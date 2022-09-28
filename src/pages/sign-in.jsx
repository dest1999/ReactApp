import { withFormik } from "formik";
import { Fragment, useEffect } from "react";
import { AuthForm } from "../components/auth-form/auth-form";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/selectors/users";
import { Link as RouteLink, useHistory } from "react-router-dom";
import { Divider, Typography, Link } from "@mui/material";
import { usePrevious } from "../hooks";
import { fetchSignInAction } from "../slices/userSlice";
import { REGISTRATION_ROUTE } from "../constants/path";
import { HOME_ROUTE } from "../constants/path";

const SignInForm = withFormik({
    mapPropsToValues: () => ({ email: '', password: ''}),
    handleSubmit: Function.prototype,
})(AuthForm);

export const SignIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(getUser);
    const prevUserValue = usePrevious(user);


    const handleSignIn = (authParams) => {
        dispatch(fetchSignInAction(authParams));
        // console.log(getDataUser(setListenerDBUser));

        // if (Object.keys(setListenerDBUser()).includes(user.uid)) {
        //     // writeUserData(user.uid, 'USER1', user.email);
        //     console.log('Yes');
        // }
    }

    useEffect(() => {
        if(user.token && !prevUserValue.token) {
            history.push(HOME_ROUTE);
        }
    }, [user, history, prevUserValue]);

    return (
        <Fragment>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', color: 'white' }}>
                Sign In
            </Typography>
            <SignInForm onSubmit={handleSignIn} />
            <Divider sx={{mt: '16px', mb: '8px', color: 'white' }} />
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
                If you don't have an account, <Link component={RouteLink} to={REGISTRATION_ROUTE} >register</Link>
            </Typography>
        </Fragment>
    )
}