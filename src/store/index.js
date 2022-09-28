// import chatsReducer from "../reducers/chats";
import { profileReducer } from "../reducers/profile/profileCheck";
import { messagesReducer } from "../reducers/messages/addMessage";
import { botAnswer } from "../middleware";
import { gistsReducer } from "../reducers/gists/getGists";
import { configureStore } from "@reduxjs/toolkit";
import { chatsReducer } from "../reducers/chats/addChat";
import userReducers from "../slices/userSlice";
import errorReducers from "../slices/errorSlice";

export const store = configureStore({
    reducer: {
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
        gists: gistsReducer,
        user: userReducers,
        error: errorReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(botAnswer),
});
