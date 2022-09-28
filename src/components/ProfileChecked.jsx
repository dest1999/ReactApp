import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkOn, checkOff } from "../constants/profileCheck";
import { getProfile } from "../store/selectors/profile";
import './style.css';

export const CheckBox  = () => {

    const dispatch = useDispatch();
    const profile = useSelector(getProfile);

    const handleChange = () => {
        profile.checkBox ? dispatch(checkOff) : dispatch(checkOn);
    };

    return (
        <>
            <input type={'checkbox'} className="checkbox" checked={profile.checkBox} value={profile.checkBox} onChange={handleChange} />
            <div className="checkboxText">{profile.text}</div>
        </>
    )
}