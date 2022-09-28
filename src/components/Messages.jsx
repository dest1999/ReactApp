import React from "react";
import { Message } from "./Message/Message";
import '../components/style.css';

export const Messages = ({ name, chat }) => {

    return (
    <>
        
        <div className="messagesList">
            <div className="chatName">{name}</div>
            {
                chat?.map((message) => <Message key={message.id} {...message} />)
            }
        </div>
    </>
        
    )
    
}



