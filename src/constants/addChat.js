export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';
export const ADD_DBCHAT = 'ADD_DBCHAT';

export const addChat = (userId) => ({
    type: ADD_CHAT,
    userId
});

export const DBAddChat = (data) => ({
    type: ADD_DBCHAT,
    data
})

export const deleteChat = (id, userId) => ({
    type: DELETE_CHAT,
    id,
    userId
});