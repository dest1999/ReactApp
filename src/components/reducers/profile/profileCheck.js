import { CHECKON_ACTION, CHECKOFF_ACTION } from "../../../constants/profileCheck";

const initialState = {
    checkOn: false,
    text: "Off"
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOFF_ACTION:
            return { ...state, checkOn: !state.checkOn, text: "Off"};
        case CHECKON_ACTION:
            return { ...state, checkOn: !state.checkOn, text: "On"};
        default:
            return state;
    }
}
