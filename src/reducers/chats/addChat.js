import { ADD_CHAT, DELETE_CHAT, ADD_DBCHAT } from "../../constants/addChat";
import { removeChatData, writeChatData } from "../../firebase-db-utils";

const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            const id = state.chatList.length+1;
            const chatId = `Chat${id}_${crypto.randomUUID()}`;
            writeChatData(chatId, id, action.userId);
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: chatId,
                        name: `Chat${id}`,
                    }
                ]
            };

        case ADD_DBCHAT:
            let currentListChats = [];
            if (action.data) {
                Object.values(action.data).forEach((item, i) => {
                    currentListChats[i] = item;
                });
            }
            return {
                ...state,
                chatList: [
                    ...currentListChats
                ]
            };

        case DELETE_CHAT:
            removeChatData(action.id, action.userId);
            return {
                ...state,
                chatList: [...state.chatList.filter((item) => item.id !== action.id)],
            };

        default:
            return state;
    }
}
