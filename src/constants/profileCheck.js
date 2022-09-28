export const CHECK_ON = 'PROFILE::CHECK_ON';
export const CHECK_OFF = 'PROFILE::CHECK_OFF';
export const ADD_NAME = 'ADD_NAME';

export const checkOn = {
    type: CHECK_ON
};

export const checkOff = {
    type: CHECK_OFF
};

export const addName = (name) => ({
    type: ADD_NAME,
    payload: name
});