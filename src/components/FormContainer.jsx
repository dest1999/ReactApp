import React from "react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, DBAddMessages } from "../constants/addMessage";
import { setListenerDBMessages } from "../firebase-db-utils";
import { getChatList } from "../store/selectors/chats";
import { getMessagesList } from "../store/selectors/messages";
import { getUser } from "../store/selectors/users";
import { Form } from "./Form";

export const FormContainer = ({ name }) => {

    const id = useSelector(getChatList).filter((list) => list.name === name)[0].id;
    const userId = useSelector(getUser).uid;
    const messagesList = useSelector(getMessagesList);

    useEffect(() => {
        if (setListenerDBMessages(id, userId) && messagesList[id] === undefined) {
            dispatch(DBAddMessages(userId, id, setListenerDBMessages(id, userId)));
        }
    });

    const dispatch = useDispatch();

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const onAddMessage = () => {
        dispatch(addMessage(id, message, userId));
        setMessage('');
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [message]);
    
    return <Form handleChange={handleChange} onAddMessage={onAddMessage} inputRef={inputRef} message={message} />
}