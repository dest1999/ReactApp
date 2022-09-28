import React from "react";
import { useState, useEffect } from "react";
import { Form } from "./Form";
import { MessagesList } from "./MessagesList";
import { ChatList } from "./ChatList";

// Контроллируемая форма
function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function onChange(e) {
        setValue(e.target.value);
    }

    function reset(){
        setValue('');
    }

    return {
        value,
        onChange,
        reset
    };
}

export function RenderPage(props) {
    const inputProps = useInput(); // Получаем имя
    const textareaProps = useInput(); // Получаем текст сообщения

    const [messages, setMessages] = useState([]);

    const updateMessages = (message) => { // Записываем в массив данные из формы
        message.key = messages.length+1;
        const copyArr = [...messages];
        copyArr.push(message);
        setMessages(copyArr);
        // console.log(message);
    }

    function addMessage() {
        inputProps.value && textareaProps.value ?
        updateMessages({autor: inputProps.value, text: textareaProps.value}) :
        console.log('Не заполнено поле ввода');
    }

    function addBotMessage() {
        let item = messages[messages.length - 1];
        if (item && item.autor !== 'Bot') {
            updateMessages({ autor: 'Bot', text: 'Your request has been accepted'})
        }
    }

    useEffect(() => { // Записываем ответ робота в массив сообщений
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(addBotMessage, 9000);
    }, [messages]);

    return (
        <div className="content">
            <div className="chatlist">
                <ChatList />
            </div>
            <div className="messageList">
            <MessagesList messages={messages}/>
            </div>
            <Form inputProps = {inputProps} textareaProps={textareaProps} addMessage={addMessage} messages={messages} />
        </div>
    )
}

