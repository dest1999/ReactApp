export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE';
export const DEL_MESSAGES_WITH_CHAT = 'DEL_MESSAGES_WITH_CHAT';
export const ADD_DATABASE_MESSAGES = 'ADD_DATABASE_MESSAGES';

export const addMessage = (chatId, message, userId) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
    userId
});

export const addBotMessage = (chatId) => ({
    type: ADD_BOT_MESSAGE,
    chatId
});

export const DBAddMessages = (userId, chatId, data) => ({
    type: ADD_DATABASE_MESSAGES,
    userId,
    chatId,
    data
})

export const deleteMessagesWithChat = (chatId) => ({
    type: DEL_MESSAGES_WITH_CHAT,
    chatId,
})