import { CHECK_ON, CHECK_OFF, ADD_NAME } from "../../constants/profileCheck";

const initialState = {
    checkBox: false,
    text: "Off",
    name: 'USER'
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_OFF:
            return { ...state, checkBox: !state.checkBox, text: "Off"};
        case CHECK_ON:
            return { ...state, checkBox: !state.checkBox, text: "On"};
        case ADD_NAME:
            return {...state, name: action.payload}
        default:
            return state;
    }
}
