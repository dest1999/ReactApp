import { STATUSES } from "../../constants";
import { GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "../../constants/getGists";

const initialState = {
    gists: [1, 2, 3],
    request: STATUSES.IDLE,
    error: null
};

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.SUCCESS
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload
            };
    default:
        return state;
    }
};




