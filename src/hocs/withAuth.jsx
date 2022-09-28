import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import { getUser } from "../store/selectors/users"

export const withAuth = (WrappedComponent) => (props) => {
    const user = useSelector(getUser);

    return (
        !!user.token ? <WrappedComponent {...props} /> : <Redirect to="/sign-in/" />
    )
}