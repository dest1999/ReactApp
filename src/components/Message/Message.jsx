import React from 'react';
import { useSelector } from 'react-redux';
import '../../components/style.css';
import { AUTHOR, BOT } from '../../constants';
import { getProfile } from '../../store/selectors/profile';

export const Message = ({ author, text }) => {
    const authorType = author === AUTHOR ? AUTHOR : BOT;
    const userName = useSelector(getProfile).name;
    const authorName = author === AUTHOR ? userName : BOT;
    
    return (
        <div className={ `message ${authorType}` }>
            <span>{authorName}</span>
            <span>{text}</span>
        </div>
    );
}