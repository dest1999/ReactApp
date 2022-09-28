import React, { useEffect } from "react";
import '../components/style.css';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat, DBAddChat } from "../constants/addChat";
import { deleteMessagesWithChat } from "../constants/addMessage";
import { getChatList } from "../store/selectors/chats";
import { ChatList } from "./ChatList";
import { setListenerDBChats } from "../firebase-db-utils";
import { getUser } from "../store/selectors/users";

export function ChatListContainer() {
  const dispatch = useDispatch();
  const chats = [...useSelector(getChatList)];
  const userId = useSelector(getUser).uid;

  useEffect(() => {
    if (setListenerDBChats(userId) && chats.length === 0) {
      dispatch(DBAddChat(setListenerDBChats(userId)));
    }
  });

  const handleChange = () => {
    dispatch(addChat(userId));
  };

  const delChat = (e) => {
    const id = e.currentTarget.id;
    dispatch(deleteChat(id, userId));
    dispatch(deleteMessagesWithChat(id));
  };

  return <ChatList chats={chats} handleChange={handleChange} delChat={delChat} />
}




