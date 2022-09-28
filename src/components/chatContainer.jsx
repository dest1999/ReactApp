import React  from 'react';
import { Messages } from './Messages';
import { FormContainer } from './FormContainer';
import { useSelector } from "react-redux";
import { getMessagesList } from "../store/selectors/messages";
import { setListenerDBChats } from "../firebase-db-utils";
import { getUser } from '../store/selectors/users';

export function Chat({ name }) {

  const user = useSelector(getUser);

  const list = Object.values(setListenerDBChats(user.uid));
  const chatId = list.filter((item) => item.name === name)[0].id;
  const userId = list.filter((item) => item.name === name)[0].userId;
  
  const messagesList = useSelector(getMessagesList);

  const chat = (userId === user.uid) ? messagesList[chatId] : [];

  return (
    <>
          <Messages name={name} chat={chat} />
          <FormContainer name={name} />
    </>

  );
}