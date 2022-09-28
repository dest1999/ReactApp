import { AUTHOR, BOT } from "../../constants";
import { ADD_MESSAGE, ADD_BOT_MESSAGE, DEL_MESSAGES_WITH_CHAT, ADD_DATABASE_MESSAGES } from "../../constants/addMessage";
import { writeMessagesData } from "../../firebase-db-utils";

const initialState = {
    messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            writeMessagesData(action.chatId, action.message, currentList.length, action.userId);
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            id: `${action.chatId}.${currentList.length+1}`,
                            text: action.message,
                            author: AUTHOR,
                        },
                    ],
                },
            };
        };
        case ADD_BOT_MESSAGE: {
            const botMessage = 'Я бот';
            const currentList = state.messageList[action.chatId] || [];
            writeMessagesData(action.chatId, botMessage, currentList.length, 'botID');
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            id: `${action.chatId}.${currentList.length+1}`,
                            text: botMessage,
                            author: BOT,
                        },
                    ],
                },
            };
        };
        case ADD_DATABASE_MESSAGES: {
            const currentList = [];

            if (action.data) {
                Object.values(action.data).forEach((item, i) => {
                    currentList[i] = item;
                    item.userId === 'botID' ? currentList[i].author = BOT : currentList[i].author = AUTHOR;
                });
            }
            
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                [action.chatId]: [
                    ...currentList
                ]
                }
            }
        };
        case DEL_MESSAGES_WITH_CHAT: {
            delete state.messageList["Chat"+action.chatId];
            const currentList = state.messageList;
            return {
                ...state,
                messageList: {
                    ...currentList
                }
            };
        };
             
        default:
            return state;
    }
};