import { getDatabase, set, remove, ref, onValue, update } from "firebase/database";

export const writeUserData = (userId, name, email) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        id: userId,
        username: name,
        email: email,
    });
}

export const updateUserName = (userId, username) => {
    const db = getDatabase();
    update(ref(db, 'users/' + userId), {username});
}

export const writeChatData = (chatId, id, userId) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId + 'chats/' + chatId), {
        id: chatId,
        name: 'Chat' + id,
        userId: userId,
    });
}

export const removeChatData = (chatId, userId) => {
    const db = getDatabase();
    remove(ref(db, 'users/' + userId + 'chats/' + chatId), {chatId});
}

export const writeMessagesData = (chatId, message, messId, userId) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId + `chats/` + chatId + `/messages/` + messId), {
        id: `${chatId}.${messId}`,
        text: message,
        userId: userId,
    });
}

export const setListenerDBUser = () => {
    const db = getDatabase();
    let data;
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}

export const setListenerDBChats = (userId) => {
    const db = getDatabase();
    let data;
    const starCountRef = ref(db, 'users/' + userId + `chats/`);
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}

export const setListenerDBMessages = (chatId, userId) => {
    const db = getDatabase();
    let data;
    const starCountRef = ref(db, 'users/' + userId + `chats/` + chatId + `/messages/`);
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}